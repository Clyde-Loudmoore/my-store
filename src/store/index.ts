import { configureStore } from '@reduxjs/toolkit';

import productReduser from './productSlice';
import brandReducer from './brandSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    allProducts: productReduser,
    allBrands: brandReducer,
    cart: cartReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
