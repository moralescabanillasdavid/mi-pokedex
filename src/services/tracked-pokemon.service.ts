export class TrackedPokemonService {
  private static trackedData: Map<number, string> = new Map();

  async addTracked(id: number, sprite: string): Promise<void> {
    TrackedPokemonService.trackedData.set(id, sprite);
  }

  async getTracked(): Promise<{ id: number, sprite: string }[]> {
    return Array.from(TrackedPokemonService.trackedData.entries()).map(([id, sprite]) => ({
      id,
      sprite
    }));
  }
}
