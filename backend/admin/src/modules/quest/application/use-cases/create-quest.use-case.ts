import { Inject } from "@nestjs/common";
import { CreateQuestDto } from "../../domain";
import { QuestService } from "../../infrastructure";

export class CreateQuestUseCase {
  constructor(
    @Inject()
    private readonly questService: QuestService,
  ) {}

  async execute(createQuestDto: CreateQuestDto) {
    return await this.questService.createQuest(createQuestDto);
  }
}
