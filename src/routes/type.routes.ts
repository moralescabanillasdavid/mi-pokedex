import { Router } from 'express';
import { TypeController } from '../controllers';

const router = Router();
const typeController = new TypeController();

router.get('/type/:nameOrId', typeController.getType.bind(typeController));

export default router;