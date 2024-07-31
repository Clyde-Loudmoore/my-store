import { FC, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import { BUY } from './constants';

import type { TProduct, TRegularPrice } from '../../../../types/productType';

import './styles.scss';

type TProps = {
  product: TProduct;
  onHandleClick: (
    type: string,
    id: number,
    sku: string,
    title: string,
    regular_price: TRegularPrice,
    image: string,
    brand: number
  ) => void;
}

const ProductCell: FC<TProps> = ({ product, onHandleClick }) => {
  const [disabledButton, setDisabledButton] = useState(false);

  return (
    <Card className='product-cell'>
      <Card.Img variant="top" src={product.image} />
      <Card.Body className='product-cell__body'>
        <Card.Title className='product-cell__title'>{product.title}</Card.Title>
        <Card.Text className='product-cell__price'>
          {product.regular_price.value} {product.regular_price.currency}
        </Card.Text>
        <Button
          variant={disabledButton ? 'secondary' : 'outline-success'}
          size='sm'
          disabled={disabledButton}
          onClick={
            () => {
              onHandleClick(
                product.type,
                product.id,
                product.sku,
                product.title,
                product.regular_price,
                product.image,
                product.brand
              );
              setDisabledButton(true);
            }
          }
        >
          {BUY}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCell;