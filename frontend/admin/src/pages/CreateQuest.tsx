import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Box, Button, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import QuestConstructor from '@/components/QuestConstructor';
import { useCreateQuestContext } from '@/state/createQuest.context';




const CreateQuest: React.FC = () => {
  const { quest, setQuest } = useCreateQuestContext();
  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log('SUBMiTTED', event, quest);
  }

  const onChange = (event: any) => {
    setQuest(quest => {
      return {
        ...quest,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <Box
    sx={{
      width: '100%',
      height: '100%',
    }}>
      <Paper
        sx={{
          width: '100%',
          padding: '1rem',
        }}>
        <Typography
          component='h1'
          sx={{
            padding: '0.5rem',
          }}>
          Create quest
        </Typography>

        <form
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'flex-start',
          }}
          onSubmit={onSubmit} >


          <TextField
            style={{
              width: '20rem',
              marginBottom: '1rem'
            }}
            type="text"
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={quest.name}
            onChange={onChange} />


          <FormControl
            style={{
              width: '20rem',
              marginBottom: '1rem',
            }}>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              id="country"
              name="country"
              variant="outlined"
              defaultValue={''}
              label="Country"
              labelId="country-label"
              value={quest.country}
              onChange={onChange} >
              {
                ['Belgium','Denmark','France','Germany','Netherlands','Portugal','Sweden','Ukraine', 'United States'].map((country, idx) => {
                  return (<MenuItem key={idx} value={country}>{country}</MenuItem>)
                })
              }
            </Select>
          </FormControl>


          <TextField
            style={{
              width: '20rem',
              marginBottom: '1rem'
            }}
            id="description"
            name="description"
            label="Description"
            multiline
            rows='3'
            value={quest.description}
            onChange={onChange} />

          <QuestConstructor />

          <Button type='submit'>Save</Button>
        </form>
      </Paper>
    </Box>
  )
}

export default CreateQuest;
