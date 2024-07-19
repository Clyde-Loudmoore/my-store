import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { TProduct } from '../types/productType';
import type { TBrand } from '../types/brandType';

const URL = 'http://localhost:3000';
const PRODUCT_URL = '/products';
const BRAND_URL = '/brands';

export const getProductsThunk = createAsyncThunk<TProduct[], undefined, { rejectValue: string }>(
  'products/getProductsThunk',
  async () => {
    const { data } = await axios.get(`${URL}${PRODUCT_URL}`);

    return data;
  }
)

export const getBrandsThunk = createAsyncThunk<TBrand[], undefined, { rejectValue: string }>(
  'brands/getBrandsThunk',
  async () => {
    const { data } = await axios.get(`${URL}${BRAND_URL}`);

    return data;
  }
)