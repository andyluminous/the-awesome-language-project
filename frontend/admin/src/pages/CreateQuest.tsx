import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Box, Button, InputLabel, MenuItem, Select } from '@mui/material';


const CreateQuest: React.FC = () => {
  const onCreateQuest = (event: any) => {
    event.preventDefault();
    console.log('SUBMiTTED', event)
  }
  return (
    <Box
    sx={{
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
    }}>
      CREATE QUEST

      <form
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
        }}
        onSubmit={onCreateQuest}>
        <FormControl >
          <TextField name='name'></TextField>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="country">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button type='submit'>Save</Button>
      </form>
    </Box>
  )
}

export default CreateQuest;
