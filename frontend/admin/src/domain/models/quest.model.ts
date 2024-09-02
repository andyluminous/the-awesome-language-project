export interface QuestStepItem {
  id: number;
  order: number;
  type: string;
  name: string;
}

export interface Quest {
  name: string;
  country: string;
  description: string;
  steps: QuestStepItem[];
}
