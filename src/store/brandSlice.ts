import { createSlice } from '@reduxjs/toolkit';

import { getBrandsThunk } from './thunks';
import type { TBrand } from '../types/brandType';

type TStore = {
  brands: TBrand[];
}

const initialState: TStore = {
  brands: []
}

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrandsThunk.fulfilled, (store, { payload }) => {
        store.brands = payload;
      })
  },
})

export default brandSlice.reducer;