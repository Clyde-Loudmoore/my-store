import { FC, useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductsThunk, getBrandsThunk } from '../../store/thunks';

import ProductCellList from './components/ProductCellList';
import CatalogFilter from './components/CatalogFilter';

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
  const brandsData = useAppSelector((store) => store.allBrands.brands);

  const handleFilterBrands = useCallback((id: number) => {
    setProducts({
      ...products,
      filteredProducts: products.defaultProducts.filter((elem) => Number(elem.brand) === Number(id))
    });
  }, [products.defaultProducts])

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getBrandsThunk());

    if (productsData.length) {
      setProducts({
        ...products,
        defaultProducts: productsData,
      });
    }
  }, [dispatch, productsData.length])

  return (
    <Container className='catalog-page'>
      <CatalogFilter brandsData={brandsData} onFilterBrands={handleFilterBrands} />
      <ProductCellList filteredProducts={products.filteredProducts} products={products.defaultProducts} />
    </Container>
  );
}

export default CatalogPage;