import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateQuestDto } from "../../domain";
import { CreateQuestUseCase, GetQuestsUseCase } from "../../application";

@Controller({
  path: 'quest',
  version: '1',
})
export class QuestController {
  constructor(
    private readonly getQuestUseCase: GetQuestsUseCase,
    private readonly createQuestUseCase: CreateQuestUseCase,
  ) {}

  @Get()
  getQuests() {
    return [];
  }

  @Post('create')
  async createQuest(
    @Body() quest: CreateQuestDto
  ) {
    return await this.createQuestUseCase.execute(quest);
  }
}