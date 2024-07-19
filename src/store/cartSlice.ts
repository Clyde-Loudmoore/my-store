import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TProduct } from '../types/productType';

type TStore = {
  cart: TProduct[];
}

const initialState: TStore = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(store, { payload }: PayloadAction<TProduct>) {
      store.cart.push({ ...payload });
    }
  },
})

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;