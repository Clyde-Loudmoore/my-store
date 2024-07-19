import { createSlice } from '@reduxjs/toolkit';

import { getProductsThunk } from './thunks';
import type { TProduct } from '../types/productType';

type TProductStore = {
  products: TProduct[];
}

const initialState: TProductStore = {
  products: []
}

const produtSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (store, { payload }) => {
        store.products = payload;
      })
  },
})

export default produtSlice.reducer;