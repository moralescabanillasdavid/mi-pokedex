import { Request, Response } from 'express';
import { AbilityEndpoint } from '../api';
import { Ability } from '../types';
import { ApiError } from '../utils/errors';

export class AbilityController {
  private abilityEndpoint = new AbilityEndpoint();

  async getAbility(req: Request, res: Response) {
    try {
      const { nameOrId } = req.params;
      const ability: Ability = await this.abilityEndpoint.getAbility(nameOrId);
      // Filter to return essential data
      const filteredAbility = {
        id: ability.id,
        name: ability.name,
        effect_entries: ability.effect_entries.filter(e => e.language.name === 'en'),
        pokemon: ability.pokemon.slice(0, 10).map(p => ({ name: p.pokemon.name })), // Limit to first 10
      };
      res.json(filteredAbility);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch ability' });
    }
  }
}