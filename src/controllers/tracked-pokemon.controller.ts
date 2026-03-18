import { Request, Response } from 'express';
import { TrackedPokemonService } from '../services/tracked-pokemon.service';

export class TrackedPokemonController {
  private trackedService = new TrackedPokemonService();

  async addTracked(req: Request, res: Response) {
    try {
      const { id, sprite } = req.body;
      if (!id || typeof id !== 'number' || !sprite) {
        return res.status(400).json({ error: 'Invalid ID or sprite' });
      }
      await this.trackedService.addTracked(id, sprite);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to track pokemon' });
    }
  }

  async getTracked(req: Request, res: Response) {
    try {
      const tracked = await this.trackedService.getTracked();
      res.json(tracked);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get tracked pokemons' });
    }
  }
}
