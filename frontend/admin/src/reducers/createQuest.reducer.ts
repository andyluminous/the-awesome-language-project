import { QuestStepTypeEnum } from '@/domain/enums/questStepTypeEnum'
import { Quest } from '@/domain/models/quest.model'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Quest = {
  name: 'Test NAME',
  country: '',
  description: 'ABCD',
  steps: [
    {
      id: 1,
      order: 0,
      type: QuestStepTypeEnum.Action,
      name: 'step 1 name',
      notes: 'step 1 notes'
    }
  ]
}

const createQuestSlice = createSlice({
  name: 'createQuest',
  initialState,
  reducers: {
    questFieldUpdated(state: Quest, action) {
      state[action.payload.name] = action.payload.value;
    },
    questStepAdded(state, action) {
      // TODO: do stuff here
    },
  },
})

export const { questFieldUpdated, questStepAdded } = createQuestSlice.actions
export default createQuestSlice.reducer