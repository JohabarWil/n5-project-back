const {Router} = require('express');
const router = Router();
const {getCharactersRm} = require('./../controllers/character');
/**
 * Exportación de ruta para listado de personajes de Rick y Morty
 */
router.get('/', getCharactersRm)
module.exports = router;