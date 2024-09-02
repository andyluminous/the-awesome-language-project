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
        <QuestStep key={idx} questStep={q} />
      ))}
      <Button onClick={handleAddStep}>Add step</Button>
    </ Box>
  )
}

export default QuestConstructor;
