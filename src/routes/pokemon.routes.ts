import { Router } from 'express';
import { PokemonController } from '../controllers';

const router = Router();
const pokemonController = new PokemonController();

router.get('/pokemon/:nameOrId', pokemonController.getPokemon.bind(pokemonController));

export default router;