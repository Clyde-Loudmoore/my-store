import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { TProduct } from '../src/types/productType';

const URL = 'http://localhost:3000';
const PRODUCT_URL = '/products';

export const getProductsThunk = createAsyncThunk<TProduct[], undefined, { rejectValue: string }>(
  'products/getProductsThunk',
  async () => {
    const { data } = await axios.get(`${URL}${PRODUCT_URL}`);

    return data;
  }
);
