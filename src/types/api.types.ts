export interface ApiResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface PokemonListItem {
  name: string;
  url: string;
}