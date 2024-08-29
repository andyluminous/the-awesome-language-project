import { Module, Provider } from "@nestjs/common";
import { QuestController } from "./controllers";
import { CreateQuestUseCase, GetQuestsUseCase } from "../application";
import { MongooseModule } from "@nestjs/mongoose";
import { Quest, QuestSchema } from "./schemas/quest.schema";
import { QuestService } from "./services";

const serviceProviders: Provider[] = [
  QuestService,
];

const useCaseProviders: Provider[] = [
  {
    provide: CreateQuestUseCase,
    useFactory: (questService: QuestService): CreateQuestUseCase => new CreateQuestUseCase(questService),
    inject: [QuestService],
  },
  {
    provide: GetQuestsUseCase,
    useClass: GetQuestsUseCase,
  },
];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Quest.name, schema: QuestSchema }]),
  ],
  controllers: [QuestController],
  providers: [
    ...serviceProviders,
    ...useCaseProviders,
  ],
})
export class QuestModule {}
