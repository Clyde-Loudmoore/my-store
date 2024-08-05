import React, { FC } from 'react';
import { Card, } from 'react-bootstrap';

import type { TCharacterResultData } from '../../types/characterType';

import './styles.scss';

type TProps = {
  character: TCharacterResultData;
}

const CharacterCell: FC<TProps> = ({ character }) => (
  <Card className='product-cell'>
    <Card.Img variant="top" src={character.image} />
    <Card.Body className='product-cell__body'>
      <Card.Title className='product-cell__title'>{character.name}</Card.Title>
      <Card.Text className='product-cell__text'>
        {character.species}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default CharacterCell;