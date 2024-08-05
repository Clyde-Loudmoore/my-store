import React, { FC } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from './images/logo-black.png';

import './styles.scss';

const Header: FC = () => (
    <div className='header'>
      <Container className="header__container">
        <Link to='/'>
          <Image src={Logo} />
        </Link>
      </Container>
    </div>
  );

export default Header;