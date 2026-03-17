import { PokemonEndpoint } from '../api';

export class PokemonService {
  private pokemonEndpoint = new PokemonEndpoint();

  async getPokemon(nameOrId: string | number) {
    return this.pokemonEndpoint.getPokemon(nameOrId);
  }
}