import { gql } from '../../__generated__/gql';

export const GET_ALL_CHARACTERS = gql(`
  query getAllCharacters {
  characters {
    results
    {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        dimension
      }
      location {
        name
        id
      }
      image
      episode {
        id
      }
      created
    },
  }
}
`);