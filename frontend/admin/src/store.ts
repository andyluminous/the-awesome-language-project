import { configureStore } from '@reduxjs/toolkit';

import createQuestReducer from './reducers/createQuest.reducer';

export const store = configureStore({
  reducer: {
    createQuest: createQuestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
