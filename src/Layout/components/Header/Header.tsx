import { FC } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks';

import Logo from './images/logo.png';
import Cart from './images/icon-basket.png'

import './styles.scss';

const Header: FC = () => {
  const cartData = useAppSelector((store) => store.cart.cart);

  return (
    <div className='header'>
      <Container className="header__container">
        <Link to='/'>
          <Image src={Logo} />
        </Link>

        <Link to='/cart' className="header__container-basket">
          <Image className='header__container-basket-icon' src={Cart} />
          <span className="header__container-basket-icon-count">{cartData.length}</span>
        </Link>
      </Container>
    </div>
  );
}

export default Header;