import { Request, Response } from 'express';
import { PokemonService } from '../services';
import { ApiError } from '../utils/errors';

export class PokemonController {
  private pokemonService = new PokemonService();

  async getPokemon(req: Request, res: Response) {
    try {
      const { nameOrId } = req.params;
      const pokemon = await this.pokemonService.getPokemon(nameOrId);
      // Filter to return only essential data
      const filteredPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(t => ({ name: t.type.name })),
        abilities: pokemon.abilities.map(a => ({ name: a.ability.name, is_hidden: a.is_hidden })),
        sprites: {
          front_default: pokemon.sprites.front_default,
          front_shiny: pokemon.sprites.front_shiny,
        },
      };
      res.json(filteredPokemon);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch pokemon' });
    }
  }
}