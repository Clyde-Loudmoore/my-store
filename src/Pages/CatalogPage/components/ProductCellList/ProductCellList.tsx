import React, { FC } from 'react';

import { ProductCell } from '../ProductCell';

import type { TProduct } from '../../../../types';

type TProps = {
  filteredProducts: TProduct[];
  products: TProduct[];
}

const ProductCellList: FC<TProps> = ({ filteredProducts, products }) => {

  if (filteredProducts.length) {
    return (
      filteredProducts.map((filteredProduct) => (
        <ProductCell
          key={filteredProduct.id}
          product={filteredProduct}
        />
      )));
  }

  if (products.length) {
    return (
      products.map((product) => (
        <ProductCell
          key={product.id}
          product={product}
        />
      ))
    );
  }

  return null;
};

export default ProductCellList;