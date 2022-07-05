const {Router} = require('express');
const router = Router();
const {getCharactersHp, postCharactersHp} = require('./../controllers/character');
router.get('/', getCharactersHp)
module.exports = router;