import { FC } from 'react';
import Table from 'react-bootstrap/Table';

import { useAppSelector } from '../../store/hooks';

const CartPage: FC = () => {
  const cartData = useAppSelector((store) => store.cart.cart);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          cartData.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.image} />
                  </td>
                <td>{product.brand} / {product.sku}</td>
                <td>{product.regular_price.value} {product.regular_price.currency}</td>
                <td>TOTAL</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}

export default CartPage;