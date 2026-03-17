export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }, is_hidden: boolean }[];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}