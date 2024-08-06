type Maybe<T> = NonNullable<T> | undefined;

export type TCharactersInfo = {
  count: number;
  pages: number;
  next: string;
  prev: null
}

export type TCharacterOriginData = {
  name: Maybe<string>;
  dimension: Maybe<string>;
} | null;

export type TCharacterLocationData = {
  name: Maybe<string>;
  id: Maybe<string>;
} | null;

export type TCharacterEpisodeData = {
  id: Maybe<string>;
} | null;

export type TCharacterResultData = {
  id?: Maybe<string>;
  name?: Maybe<string>;
  status?: Maybe<string>;
  species?: Maybe<string>;
  type?: Maybe<string>;
  gender?: Maybe<string>;
  image?: Maybe<string>;
  created?: Maybe<string>;
  origin?: {
    name?: Maybe<string>;
    dimension?: Maybe<string>;
  } | null;
  location?: {
    name?: Maybe<string>;
    id?: Maybe<string>;
  } | null;
  episode: Array<{
    id?: Maybe<string>;
  } | null>;
}

export type TAllCharacters = {
  results?: TCharacterResultData[] | null;
}
