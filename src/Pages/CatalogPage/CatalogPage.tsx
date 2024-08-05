import React, { FC, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllCharactersThunk } from '../../../api/allCharactersThunk';

import { CharacterCellList } from './components/CharacterCellList';

import './styles.scss';

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const characterssData = useAppSelector((store) => store.allCharacters.characters.results);

  useEffect(() => {
    dispatch(getAllCharactersThunk());
  }, [dispatch]);

  return (
    <Container className='catalog-page'>
      <CharacterCellList characters={characterssData} />
    </Container>
  );
};

export default CatalogPage;