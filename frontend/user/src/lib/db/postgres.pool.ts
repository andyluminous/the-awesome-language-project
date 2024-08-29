import { Pool } from 'pg';
import type { PoolConfig } from 'pg';

const config: PoolConfig = {
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT!, 10),
  host: process.env.POSTGRES_HOST,
  keepAlive: true,
};

const pool: Pool = new Pool(config);

export default pool;