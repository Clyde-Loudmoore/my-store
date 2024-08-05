export type TCharactersInfo = {
  count: number;
  pages: number;
  next: string;
  prev: null
}

export type TCharacterOriginData = {
  name: string;
  url: string;
}
export type TCharacterLocationData = {
  name: string;
  url: string;
}

export type TCharacterResultData = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: TCharacterOriginData;
  location: TCharacterLocationData;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type TAllCharacters = {
  info: TCharactersInfo | null;
  results: TCharacterResultData[];
}
