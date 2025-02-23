import { DragEvent, DragEventHandler } from "react";

import { Button } from "@/components/ui/button"

import QuestStep from "./QuestStep";
import { Quest } from "@/domain/models/quest.model";
import { useCreateQuestContext } from "@/state/createQuest.context";


const QuestConstructor: React.FC<{}> = () => {
  const { quest, setQuest } = useCreateQuestContext();
  const handleAddStep = () => {
    console.log('adding step')
    setQuest((quest: Quest) => {
      return {
        ...quest,
        steps: [
          ...quest.steps, {
            id: quest.steps.length,
            order: quest.steps.length,
            type: '',
            name: '',
            notes: '',
          },
        ],
      } as Quest;
    });
  }

  // TODO: DRAG EVENT SERVICE

  const handleQuestStepDrop: DragEventHandler<HTMLDivElement>  = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Drop', event);
    (event.target as HTMLDivElement).style.backgroundColor = 'green';
    const data = event.dataTransfer.getData('text');
    console.log('DROP DATA', data);
    // TODO: Rearrange steps event
  }

  const handleQuestStepDragEnter: DragEventHandler<HTMLDivElement> = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('DragEnter', event);
    (event.target as HTMLDivElement).style.backgroundColor = 'red';
  }

  const handleQuestStepDragOver: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy"
    console.log('DragOver', event);
  }

  const handleQuestStepDragLeave: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('DragLeave', event);
    (event.target as HTMLDivElement).style.backgroundColor = 'white';
  }

  return (
    <div>
      {quest.steps.map((q, idx) => (
        <div key={idx}>
          <QuestStep questStep={q} />
          <div
            style={{ width: '100%', height: '3rem', border: '1px solid black'}}
            // onDragOver={(event) => console.log('Dragover', event)}
            onDrop={handleQuestStepDrop}
            onDragEnter={handleQuestStepDragEnter}
            onDragOver={handleQuestStepDragOver}
            onDragLeave={handleQuestStepDragLeave}></div>
        </div>
      ))}
      <Button onClick={handleAddStep}>Add step</Button>
    </ div>
  )
}

export default QuestConstructor;
