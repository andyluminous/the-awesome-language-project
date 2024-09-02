import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import { CardContent, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Quest, QuestStepItem } from "@/domain/models/quest.model";
import { useCreateQuestContext } from "@/state/createQuest.context";
import { QuestStepTypeEnum } from "@/domain/enums/questStepTypeEnum";
import ActionQuestStep from "./ActionQuestStep";
import ChecklistQuestStep from "./ChecklistQuestStep";

interface QuestStepProps {
  questStep: QuestStepItem;
}

const QuestStep: React.FC<QuestStepProps> = ({ questStep }: QuestStepProps) => {
  const { setQuest } = useCreateQuestContext();
  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuest((quest: Quest) => {
      return {
        ...quest,
        steps: quest.steps.map(step => {
          if (step.id !== questStep.id) {
            return step;
          }
          return {
            ...step,
            [evt.target.name]: evt.target.value,
          };
        })
      } as Quest;
    })
  }

  const onTypeChange = (evt: SelectChangeEvent<string>) => {
    const type = evt.target.value;
    let stepMixin: Partial<QuestStepItem>;
    if (type == QuestStepTypeEnum.Action) {
      stepMixin = { type };
    } else if (type == QuestStepTypeEnum.Checklist) {
      stepMixin = { type, actionItems: [''] }
    }
    setQuest((quest: Quest) => {
      return {
        ...quest,
        steps: quest.steps.map((step: QuestStepItem) => {
          if (step.id !== questStep.id) {
            return step;
          }
          return {
            ...step,
            ...stepMixin,
          };
        })
      } as Quest;
    })
  }

  return (
    <Card
      draggable="true"
      onDragStart={(event) => {
        event.dataTransfer.setData('text', 'test')
      }}
      sx={{
        marginBottom: '1rem',
      }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <Typography
          component="h2">
          Step id: { questStep.id }, Order: { questStep.order }
        </Typography>

        <TextField
            style={{
              width: '20rem',
              marginBottom: '1rem'
            }}
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            value={questStep.name}
            onChange={onChange} />

        <FormControl
          style={{
            width: '20rem',
          }}>
          <InputLabel id="type-label">Step type</InputLabel>
          <Select
            id="type"
            name="type"
            variant="outlined"
            label="Step type"
            labelId="type-label"
            value={questStep.type}
            onChange={onTypeChange} >
            {
              ['action', 'checklist'].map((country, idx) => {
                return (<MenuItem key={idx} value={country}>{country}</MenuItem>)
              })
            }
          </Select>
        </FormControl>

        {questStep.type === 'action' && (<ActionQuestStep />)}
        {questStep.type === 'checklist' && (<ChecklistQuestStep />)}
      </CardContent>
    </ Card>
  );
}

export default QuestStep;