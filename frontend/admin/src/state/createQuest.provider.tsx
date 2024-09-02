import { type ReactNode, useMemo, useState } from "react";
import { Quest } from "@/domain/models/quest.model";
import { CreateQuestContext } from "./createQuest.context";

type CreateQuestProviderProps = {
  children: ReactNode
}

export const CreateQuestProvider = (props: CreateQuestProviderProps) => {
  const [quest, setQuest] = useState<Quest>({
    name: '',
    country: '',
    description: '',
    steps: [],
  });

  const providedValues = useMemo(() => ({
    quest,
    setQuest,
  }), [quest])

  return (
    <CreateQuestContext.Provider value={providedValues}>
      {props.children}
    </CreateQuestContext.Provider>
  );
}
