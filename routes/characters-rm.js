const {Router} = require('express');
const router = Router();
const {getCharactersRm} = require('./../controllers/character');

router.get('/', getCharactersRm)
module.exports = router;