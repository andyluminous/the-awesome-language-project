import React from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import QuestConstructor from '@/components/QuestConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { questFieldUpdated } from '@/reducers/createQuest.reducer';


const CreateQuest: React.FC = () => {
  const quest = useSelector((state: any) => state.createQuest)
  const dispatch = useDispatch()

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log('SUBMiTTED', event, quest);
  }

  const onChange = (event: any) => {
    dispatch(questFieldUpdated({
      name: event.target.name,
      value: event.target.value,
    }));
  }

  return (
    <div>
        <h1>
          Create quest
        </h1>

        <form
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'flex-start',
          }}
          onSubmit={onSubmit} >


          <Input
            type="text"
            id="name"
            name="name"
            value={quest.name}
            onChange={onChange} />

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                {
                  ['Belgium','Denmark','France','Germany','Netherlands','Portugal','Sweden','Ukraine', 'United States'].map((country, idx) => {
                    return (<SelectItem key={idx} value={country}>{country}</SelectItem>)
                  })
                }
              </SelectGroup>
            </SelectContent>
          </Select>


          <Input
            id="description"
            name="description"
            value={quest.description}
            onChange={onChange} />

          <QuestConstructor />

          <Button type='submit'>Save</Button>
        </form>



    </div>
  )
}

export default CreateQuest;
