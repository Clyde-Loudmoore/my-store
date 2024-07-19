import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import { Container, Accordion } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getProductsThunk, getBrandsThunk } from '../../store/thunks';
import { addProduct } from '../../store/cartSlice';

import ProductCell from '../../components/ProductCell';
import type { TProduct, TRegularPrice } from '../../types/productType';

import './styles.scss';

const CatalogPage: FC = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  const dispatch = useAppDispatch();
  const productsData = useAppSelector((store) => store.allProducts.products);
  const brandsData = useAppSelector((store) => store.allBrands.brands);

  const handleFilterBrands = (id: number) => {
    setFilteredProducts(products.filter((elem) => Number(elem.brand) === Number(id)));
  }

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

  const renderFilteredProducts = useMemo(() => {
    return (
      filteredProducts.map((product) => {
        return (
          <ProductCell
            key={product.id}
            imagePath={product.image}
            title={product.title}
            price={product.regular_price}
            type={product.type}
            id={product.id}
            sku={product.sku}
            brand={product.brand}
            onHandleClick={handleAddProductInBasket}
          />
        )
      }))
  }, [filteredProducts])

  const renderProducts = useMemo(() => {
    return (
      products.map((product) => {
        return (
          <ProductCell
            key={product.id}
            imagePath={product.image}
            title={product.title}
            price={product.regular_price}
            type={product.type}
            id={product.id}
            sku={product.sku}
            brand={product.brand}
            onHandleClick={handleAddProductInBasket}
          />
        )
      })
    )
  }, [products])

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getBrandsThunk());
  }, [dispatch])

  useEffect(() => {
    setProducts(productsData)
  }, [productsData])

  return (
    <Container className='catalog-page'>
      <Accordion className='catalog-page__filter' defaultActiveKey='1'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Brand</Accordion.Header>
          {
            brandsData.map((productBrand) => {
              return (
                <Accordion.Body
                  key={productBrand.id}
                  className='catalog-page__filter-body'
                  onClick={() => handleFilterBrands(productBrand.id)}
                >
                  {productBrand.title}
                </Accordion.Body>
              )
            })
          }
        </Accordion.Item>
      </Accordion>

      {filteredProducts.length ? renderFilteredProducts : renderProducts}
    </Container>
  );
}

export default CatalogPage;