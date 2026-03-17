import { pokeApiClient } from '../pokeapi.client';
import { Pokemon } from '../../types';

export class PokemonEndpoint {
  async getPokemon(nameOrId: string | number): Promise<Pokemon> {
    return pokeApiClient.get<Pokemon>(`pokemon/${nameOrId}`);
  }
}