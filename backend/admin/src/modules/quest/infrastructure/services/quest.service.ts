import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Quest } from "../schemas/quest.schema";
import { Model } from "mongoose";
import { CreateQuestDto } from "../../domain";

@Injectable()
export class QuestService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
  ) {}

  async createQuest(createQuestDto: CreateQuestDto): Promise<Quest> {
    const newQuest = new this.questModel(createQuestDto);
    return newQuest.save();
  }

  async getQuests(): Promise<Quest[]> {
    return this.questModel.find().exec();
  }
}
