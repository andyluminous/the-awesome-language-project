import { QuestStepTypeEnum } from "../enums/questStepTypeEnum";

export interface QuestStepItem {
  id: number;
  order: number;
  type: QuestStepTypeEnum;
  name: string;
  notes: string;
  actionItems?: string[];
}

export interface Quest {
  name: string;
  country: string;
  description: string;
  steps: QuestStepItem[];
}
