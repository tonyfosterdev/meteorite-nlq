import { Pool, QueryResult } from "pg";
import { MeteoriteDb } from "../dto/MeteoriteDb";
import pool from "../lib/db";

// Interfaces like this are really helpful for performing dependency injection
export interface MeteoriteDatabaseInterface {
  getFirstNRows(n: number): Promise<QueryResult<MeteoriteDb>>;
  executeSqlQuery(sqlQUery: string): Promise<QueryResult<MeteoriteDb>>;
}

export type MeteoriteDatabaseOptions = {
  pool: Pool;
}

// This class is responsible for querying the meteorite database
// Note that all DB specific code is here, that's on purpose
// This class is a very good candidate for integration tests against the
// database.
export class MeteoriteDatabase implements MeteoriteDatabaseInterface {
  private pool: Pool;

  constructor(options?: MeteoriteDatabaseOptions) {
    this.pool = options?.pool ?? pool;
  }

  getFirstNRows(n: number): Promise<QueryResult<MeteoriteDb>> {
    return this.pool.query<MeteoriteDb>(`
      SELECT * FROM public.meteorites
      ORDER BY id ASC
      LIMIT $1
    `, [n]);
  }

  executeSqlQuery(sqlQUery: string) {
    return this.pool.query<MeteoriteDb>(sqlQUery);
  }
}