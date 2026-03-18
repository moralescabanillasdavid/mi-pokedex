import express from 'express';
import { pokemonRoutes, typeRoutes, abilityRoutes, trackedRoutes } from './routes';
import { config } from './config';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', pokemonRoutes);
app.use('/api', typeRoutes);
app.use('/api', abilityRoutes);
app.use('/api', trackedRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});