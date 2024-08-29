import { Db, MongoClient } from 'mongodb'
import { IMongoConfig } from 'src/config';
import * as mongoose from 'mongoose';

export const MONGO_PROVIDER_TOKEN = Symbol('MONGO_PROVIDER_TOKEN');

export class MongoClientProvider {
  private _client: MongoClient;

  constructor(config: IMongoConfig) {
    this._client = new MongoClient(this.getUri(config));
    mongoose.createConnection
    mongoose.connect
  }

  private getUri(config: IMongoConfig): string {
    const { host, port, user, password, database } = config;
    return `mongodb://${user}:${password}@${host}:${port}/${database}`;
  }

  get client(): MongoClient {
    return this._client;
  }

  get adminDB(): Db {
    return this.client.db('admin');
  }
}
