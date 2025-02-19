import { Meteorite } from "../dto/Meteorite";
import { LLMService, LLMServiceInterface } from "./LLMService";
import { MeteoriteDatabase, MeteoriteDatabaseInterface } from "./MeteoriteDatabase";

export interface MeteoriteServiceInterface {
  getFirstPage(): Promise<Meteorite[]>;
  queryWithNatualLanguage(userQuery: string): Promise<Meteorite[]>
}

export type MeteoriteServiceOptions = {
  database: MeteoriteDatabaseInterface,
  llmService: LLMServiceInterface,
}

export class MeteoriteService implements MeteoriteServiceInterface {
  private database: MeteoriteDatabaseInterface;
  private llmService: LLMServiceInterface;

  constructor(options?: MeteoriteServiceOptions) {
    this.database = options?.database ?? new MeteoriteDatabase()
    this.llmService = options?.llmService ?? new LLMService()
  }

  async getFirstPage() {
    const dbResult = await this.database.getFirstNRows(15);
    return dbResult.rows.map(Meteorite.fromDbRow);
  }

  async queryWithNatualLanguage(userQuery: string) {
    console.log("Received userQuery: ", userQuery);

    const sqlQuery = await this.llmService.generateSqlQuery(userQuery);
    console.log("SQL Query: ", sqlQuery);

    console.warn("⚠️ These queries are not sanitized yet. ⚠️");
    const dbResult = await this.database.executeSqlQuery(sqlQuery);

    return dbResult.rows.map(Meteorite.fromDbRow);
  }
}