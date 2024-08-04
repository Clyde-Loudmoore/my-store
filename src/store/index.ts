import { configureStore } from '@reduxjs/toolkit';

import productReduser from './slices/productSlice';

const store = configureStore({
  reducer: {
    allProducts: productReduser,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
