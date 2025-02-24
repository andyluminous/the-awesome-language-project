import { useCallback, useMemo } from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Quest, QuestStepItem } from "@/domain/models/quest.model";


interface ChecklistQuestStepProps {
  questStep: QuestStepItem;
}

const ChecklistQuestStep: React.FC<ChecklistQuestStepProps> = ({ questStep }: ChecklistQuestStepProps) => {
  // TODO: CHange to create quest redux store
  // const { setQuest } = useCreateQuestContext();

  const addCheckListItem = useCallback(() => {
    
  }, []);

  const getItemChangeHandler = useCallback<(index: number) => (event: any) => void>((index: number) => {
    return (event: any) => {
      console.log('Handling change for', index, 'with', event);
    }
  }, []);

  const handleChecklistItemChange = useMemo(() => {
    return questStep.actionItems?.map((_: string, index: number): (event: any) => void => {
      return getItemChangeHandler(index);
    })
  }, [questStep.actionItems]);

  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
        }}>
        { questStep.actionItems?.map(
          (item, idx) => {
            return (
              <li
                key={idx}
                style={{
                  marginBottom: '1rem',
                }}>
                <Input
                  value={item}
                  onChange={handleChecklistItemChange![idx]} />
                  
              </li>
            )
          }
        )}
      </ul>
      <Button onClick={addCheckListItem}>+ Add</Button>
    </>
  );
}

export default ChecklistQuestStep;
