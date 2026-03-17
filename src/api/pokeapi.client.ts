import axios, { AxiosInstance } from 'axios';
import { config } from '../config';

class PokeApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: config.pokeApiBaseUrl,
    });
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await this.client.get(endpoint);
    return response.data;
  }
}

export const pokeApiClient = new PokeApiClient();