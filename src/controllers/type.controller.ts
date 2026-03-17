import { Request, Response } from 'express';
import { TypeEndpoint } from '../api';
import { Type } from '../types';
import { ApiError } from '../utils/errors';

export class TypeController {
  private typeEndpoint = new TypeEndpoint();

  async getType(req: Request, res: Response) {
    try {
      const { nameOrId } = req.params;
      const type: Type = await this.typeEndpoint.getType(nameOrId);
      // Filter to return essential data
      const filteredType = {
        id: type.id,
        name: type.name,
        damage_relations: type.damage_relations,
        pokemon: type.pokemon.slice(0, 10).map(p => ({ name: p.pokemon.name })), // Limit to first 10
      };
      res.json(filteredType);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch type' });
    }
  }
}