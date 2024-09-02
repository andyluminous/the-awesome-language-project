import Button from "@mui/material/Button";
import QuestStep from "./QuestStep";
import { Box } from "@mui/material";
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

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
      }}>
      {quest.steps.map((q, idx) => (
        <div key={idx}>
          <QuestStep questStep={q} />
          <div
            style={{ width: '100%', height: '3rem', border: '1px solid black'}}
            // onDragOver={(event) => console.log('Dragover', event)}
            onDrop={(event) => {
              event.preventDefault();
              event.stopPropagation();
              console.log('Drop', event);
            }}
            
            onDragEnter={(event) => {
              event.preventDefault();
              event.stopPropagation();
              console.log('DragEnter', event);
            }}

            onDragOver={(event) => {
              event.preventDefault();
              event.stopPropagation();
              event.dataTransfer.dropEffect = "copy"
              console.log('DragOver', event);
            }}
            
            onDragLeave={(event) => {
              event.preventDefault();
              event.stopPropagation();
              console.log('DragLeave', event);
            }}></div>
        </div>
      ))}
      <Button onClick={handleAddStep}>Add step</Button>
    </ Box>
  )
}

export default QuestConstructor;
