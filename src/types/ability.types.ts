export interface Ability {
  id: number;
  name: string;
  effect_entries: {
    effect: string;
    language: { name: string; url: string };
  }[];
  pokemon: { pokemon: { name: string; url: string } }[];
}