import { Router } from 'express';
import { TrackedPokemonController } from '../controllers/tracked-pokemon.controller';

const router = Router();
const controller = new TrackedPokemonController();

router.post('/tracked', (req, res) => controller.addTracked(req, res));
router.get('/tracked', (req, res) => controller.getTracked(req, res));

export default router;
