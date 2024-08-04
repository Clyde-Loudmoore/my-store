import React, { FC, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductsThunk } from '../../../api/productThunk';

import { ProductCellList } from './components/ProductCellList';
// import { CatalogFilter } from './components/CatalogFilter';

import type { TProduct } from '../../types/productType';

import './styles.scss';

type TState = {
  defaultProducts: TProduct[];
  filteredProducts: TProduct[];
}

const CatalogPage: FC = () => {
  const [products, setProducts] = useState<TState>({
    defaultProducts: [],
    filteredProducts: [],
  });

  const dispatch = useAppDispatch();
  const productsData = useAppSelector((store) => store.allProducts.products);

  useEffect(() => {
    dispatch(getProductsThunk());

    if (productsData.length) {
      setProducts({
        ...products,
        defaultProducts: productsData,
      });
    }
  }, [dispatch, productsData.length]);

  return (
    <Container className='catalog-page'>
      <ProductCellList filteredProducts={products.filteredProducts} products={products.defaultProducts} />
    </Container>
  );
};

export default CatalogPage;