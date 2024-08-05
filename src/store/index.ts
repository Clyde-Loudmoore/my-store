import { configureStore } from '@reduxjs/toolkit';

import allCharactersReduser from './slices/allCharactersSlice';

const store = configureStore({
  reducer: {
    allCharacters: allCharactersReduser,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
