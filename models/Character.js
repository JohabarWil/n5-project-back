const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const CharactersSchema = Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    species: {
        type: String,
        require: true
    },
    actor: {
        type: String,
        require: false
    }
})

CharactersSchema.plugin(mongoosePaginate);
module.exports = {
    Character_Hp: model('Character_Hp', CharactersSchema),
    Character_Rm: model('Character_Rm', CharactersSchema)
};