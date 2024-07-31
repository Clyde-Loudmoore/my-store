import { FC, useCallback } from 'react';

import { useAppDispatch } from '../../../../store/hooks';
import { addProduct } from '../../../../store/cartSlice';

import ProductCell from '../ProductCell/ProductCell';

import type { TProduct, TRegularPrice } from '../../../../types/productType';

type TProps = {
  filteredProducts: TProduct[];
  products: TProduct[];
}

const ProductCellList: FC<TProps> = ({ filteredProducts, products }) => {
  const dispatch = useAppDispatch();

  const handleAddProductInBasket = useCallback((
    type: string,
    id: number,
    sku: string,
    title: string,
    regular_price: TRegularPrice,
    image: string,
    brand: number,
  ) => {
    dispatch(addProduct(
      {
        type,
        id,
        sku,
        title,
        regular_price,
        image,
        brand,
      }
    ));
  }, [dispatch])

  if (filteredProducts.length) {
    return (
      filteredProducts.map((filteredProduct) => {
        return (
          <ProductCell
            key={filteredProduct.id}
            product={filteredProduct}
            onHandleClick={handleAddProductInBasket}
          />
        )
      }))
  }

  if (products.length) {
    return (
      products.map((product) => {
        return (
          <ProductCell
            key={product.id}
            product={product}
            onHandleClick={handleAddProductInBasket}
          />
        )
      })
    )
  }

  return null;
}

export default ProductCellList;