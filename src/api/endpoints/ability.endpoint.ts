import { pokeApiClient } from '../pokeapi.client';
import { Ability } from '../../types';

export class AbilityEndpoint {
  async getAbility(nameOrId: string | number): Promise<Ability> {
    return pokeApiClient.get<Ability>(`ability/${nameOrId}`);
  }
}