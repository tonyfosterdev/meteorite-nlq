import { Meteorite } from "../dto/Meteorite";
import { OpenAIGpt4oSemanticParsingService, SemanticParsingServiceInterface } from "./SemanticParsingService";
import { MeteoriteDatabase, MeteoriteDatabaseInterface } from "./MeteoriteDatabase";

// Interfaces like this are really helpful for performing dependency injection
export interface MeteoriteServiceInterface {
  getFirstPage(): Promise<Meteorite[]>;
  queryWithNatualLanguage(userQuery: string): Promise<Meteorite[]>
}

export type MeteoriteServiceOptions = {
  database: MeteoriteDatabaseInterface,
  semanticParsingService: SemanticParsingServiceInterface,
}

// Performs the bulks of out NLQ workflow
export class MeteoriteService implements MeteoriteServiceInterface {
  private database: MeteoriteDatabaseInterface;
  private semanticParsingService: SemanticParsingServiceInterface;

  constructor(options?: MeteoriteServiceOptions) {
    this.database = options?.database ?? new MeteoriteDatabase()
    this.semanticParsingService = options?.semanticParsingService ?? new OpenAIGpt4oSemanticParsingService()
  }

  // This is helpful when 
  async getFirstPage() {
    const dbResult = await this.database.getFirstNRows(15);
    return dbResult.rows.map(Meteorite.fromDbRow);
  }

  // The NLP Workflow:
  //  1. Parse the NLQ to SQL
  //  2. Execute the SQL query
  //  3. Return the data
  async queryWithNatualLanguage(userQuery: string) {
    // Log semi-verbosely, ideally we'd use structured JSON logs, or similar.
    console.log("Received userQuery: ", userQuery);

    const sqlQuery = await this.semanticParsingService.parseToSql(userQuery);

    // Under production circumstances, you should be careful doing this so you don't log
    // PII... but these are meteorites.
    console.log("SQL Query: ", sqlQuery);

    // !! Be careful !!
    console.warn("⚠️ These queries are not sanitized yet. ⚠️");
    const dbResult = await this.database.executeSqlQuery(sqlQuery);

    return dbResult.rows.map(Meteorite.fromDbRow);
  }
}