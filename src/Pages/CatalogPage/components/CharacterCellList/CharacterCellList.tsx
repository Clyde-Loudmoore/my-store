import React, { FC } from 'react';

import { ProductCell } from '../../../../components/CharacterCell';

import type { TCharacterResultData } from '../../../../types';

type TProps = {
  characters: TCharacterResultData[];
}

const CharacterCellList: FC<TProps> = ({ characters }) => (
    characters.map((character) => (
      <ProductCell
        key={character.id}
        character={character}
      />
    )));

export default CharacterCellList;