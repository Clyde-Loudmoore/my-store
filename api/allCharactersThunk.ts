import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { TAllCharacters } from '../src/types/characterType';

const URL = 'https://rickandmortyapi.com/api';
const CHARACTERS_URL = '/character';

export const getAllCharactersThunk = createAsyncThunk<TAllCharacters, undefined, { rejectValue: string }>(
  'products/getProductsThunk',
  async () => {
    const { data } = await axios.get(`${URL}${CHARACTERS_URL}`);

    return data;
  }
);
