import React, {
  FC
} from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';

import { GET_ALL_CHARACTERS } from '../../api/apollo/allCharacters';

import { CharacterCellList } from './components/CharacterCellList';

import './styles.scss';

const CharactersPage: FC = () => {

  const { data } = useQuery(GET_ALL_CHARACTERS);

  return (
    <Container className='catalog-page'>
      <CharacterCellList characters={data?.characters} />
    </Container>
  );
};

export default CharactersPage;
