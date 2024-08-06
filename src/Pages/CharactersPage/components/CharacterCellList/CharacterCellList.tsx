import React, { FC } from 'react';

import { ProductCell } from '../../../../components/CharacterCell';

import type { TAllCharacters } from '../../../../types';

type TProps = {
  characters?: TAllCharacters;
}

const CharacterCellList: FC<TProps> = ({ characters }) => (
    characters?.results.map((character) => (
      <ProductCell
        key={character.id}
        character={character}
      />
    )));

export default CharacterCellList;