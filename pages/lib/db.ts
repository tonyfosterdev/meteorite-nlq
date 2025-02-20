import { Pool } from 'pg';

// Configure the pg connection pool with our connection string

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
