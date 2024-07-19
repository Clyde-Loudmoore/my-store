import { FC, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import type { TRegularPrice } from '../../types/productType';

import './styles.scss';

type TProps = {
  type: string,
  id: number,
  sku: string,
  title: string,
  price: TRegularPrice,
  imagePath: string,
  brand: number,
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

const ProductCell: FC<TProps> = (
  {
    type,
    id,
    sku,
    title,
    price,
    imagePath,
    brand,
    onHandleClick,
  }
) => {
  const [disabledButton, setDisabledButton] = useState(false);

  return (
    <Card className='product-cell'>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body className='product-cell__body'>
        <Card.Title className='product-cell__title'>{title}</Card.Title>
        <Card.Text className='product-cell__price'>
          {price.value} {price.currency}
        </Card.Text>
        <Button
          variant={disabledButton ? 'secondary' : 'outline-success'}
          size='sm'
          disabled={disabledButton}
          onClick={
            () => {
              onHandleClick(
                type,
                id,
                sku,
                title,
                price,
                imagePath,
                brand
              );
              setDisabledButton(true);
            }
          }
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCell;