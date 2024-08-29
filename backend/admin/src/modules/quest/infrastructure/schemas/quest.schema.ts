import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { QuestModel } from "../../domain";

export type QuestDocument = HydratedDocument<Quest>;

@Schema({
  timestamps: true,
})
export class Quest implements QuestModel {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  country: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;
}

export const QuestSchema = SchemaFactory.createForClass(Quest);
