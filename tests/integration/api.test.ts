import request from 'supertest';
import express from 'express';
import { pokemonRoutes } from '../../src/routes';

const app = express();
app.use(express.json());
app.use('/api', pokemonRoutes);

describe('API Integration Tests', () => {
  it('should get pokemon data', async () => {
    const response = await request(app).get('/api/pokemon/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
  });
});