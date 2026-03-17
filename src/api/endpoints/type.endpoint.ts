import { pokeApiClient } from '../pokeapi.client';
import { Type } from '../../types';

export class TypeEndpoint {
  async getType(nameOrId: string | number): Promise<Type> {
    return pokeApiClient.get<Type>(`type/${nameOrId}`);
  }
}