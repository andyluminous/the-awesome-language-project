import { QuestStepItem } from "@/domain/models/quest.model";

interface ActionQuestStepProps {
  questStep: QuestStepItem;
}

const ActionQuestStep: React.FC<ActionQuestStepProps> = ({ questStep }: ActionQuestStepProps) => {
  return (
    <>
      <h4>ACTION HERE</h4>
    </>
  );
}

export default ActionQuestStep;
