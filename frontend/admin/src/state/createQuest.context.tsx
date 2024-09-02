import { Quest } from "@/domain/models/quest.model";
import { type Context, createContext, Dispatch, SetStateAction, useContext } from "react";

export interface CreateQuestContextValue {
  quest: Quest;
  setQuest: Dispatch<SetStateAction<Quest>>;
}

export const CreateQuestContext: Context<CreateQuestContextValue> = createContext<CreateQuestContextValue>(
  {
    quest: {
      name: '',
      country: '',
      description: '',
      steps: [],
    },
    setQuest: () => {},
  }
);

export const useCreateQuestContext = () => useContext(CreateQuestContext);
