import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import { CardContent, TextField, Typography } from "@mui/material";
import React from "react";
import { Quest, QuestStepItem } from "@/domain/models/quest.model";
import { useCreateQuestContext } from "@/state/createQuest.context";

interface QuestStepProps {
  questStep: QuestStepItem;
}

const QuestStep: React.FC<QuestStepProps> = ({ questStep }: QuestStepProps) => {
  const { setQuest } = useCreateQuestContext();
  const onChange = (evt: SelectChangeEvent<string>) => {
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
      }
    })
  }
  return (
    <Card>
      <CardContent
        sx={{
          marginBottom: '1rem',
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
            value={questStep.name}></TextField>

        <FormControl
          style={{
            width: '20rem',
          }}>
          <InputLabel id="step-type-label">Step type</InputLabel>
          <Select
            id="step-type"
            name="step-type"
            variant="outlined"
            label="Step type"
            labelId="step-type-label"
            value={questStep.type}
            onChange={onChange}
          >
            {
              ['action', 'checklist'].map((country, idx) => {
                return (<MenuItem key={idx} value={country}>{country}</MenuItem>)
              })
            }
          </Select>
        </FormControl>

        {questStep.type === 'action' && (<div>ACTION</div>)}
        {questStep.type === 'checklist' && (<div>CHECKLIST</div>)}
      </CardContent>
    </ Card>
  );
}

export default QuestStep;