import { Router } from 'express';
import { AbilityController } from '../controllers';

const router = Router();
const abilityController = new AbilityController();

router.get('/ability/:nameOrId', abilityController.getAbility.bind(abilityController));

export default router;