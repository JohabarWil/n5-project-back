const {Router} = require('express');
const router = Router();
/**
 * Exportación de ruta para listado de personajes de Harry Potter
 */
const {getCharactersHp} = require('./../controllers/character');
router.get('/', getCharactersHp)
module.exports = router;