import React, { FC } from 'react';
import { Card, Button } from 'react-bootstrap';

import { BUY } from './constants';

import type { TProduct } from '../../../../types/productType';

import './styles.scss';

type TProps = {
  product: TProduct;
}

const ProductCell: FC<TProps> = ({ product }) => (
  <Card className='product-cell'>
    <Card.Img variant="top" src={product.image} />
    <Card.Body className='product-cell__body'>
      <Card.Title className='product-cell__title'>{product.title}</Card.Title>
      <Card.Text className='product-cell__price'>
        {product.regular_price.value} {product.regular_price.currency}
      </Card.Text>
      <Button
        size='sm'
      >
        {BUY}
      </Button>
    </Card.Body>
  </Card>
);

export default ProductCell;