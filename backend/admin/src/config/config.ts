import { configDotenv } from "dotenv";

export interface IMongoConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export interface IConfig {
  mongo: IMongoConfig;
}

configDotenv();

export const getConfig = (): IConfig => {
  return {
    mongo: {
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT, 10),
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DATABASE,
    }
  }
}
