import { createSlice } from '@reduxjs/toolkit';

import { getAllCharactersThunk } from '../../../api/allCharactersThunk';
import type { TAllCharacters } from '../../types/characterType';

type TAllCharactersStore = {
  characters: TAllCharacters;
}

const initialState: TAllCharactersStore = {
  characters: {
    info: null,
    results: [],
  },
};

const allCharactersSlice = createSlice({
  name: 'allCharacters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharactersThunk.fulfilled, (store, { payload }) => {
        store.characters = payload;
      });
  },
});

export default allCharactersSlice.reducer;