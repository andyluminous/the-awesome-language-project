import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/infrastructure';
import { QuestModule } from './modules/quest/infrastructure';
import { MongooseModule } from '@nestjs/mongoose';
import { getConfig, IMongoConfig } from './config';

function getMongoDbUri(config: IMongoConfig): string {
  const { host, port, user, password, database } = config;
  return `mongodb://${user}:${password}@${host}:${port}/${database}`;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
      isGlobal: true,
    }),
    MongooseModule.forRoot(getMongoDbUri(getConfig().mongo)),
    AuthModule,
    QuestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
