const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
/**
 * Modelo base de las colecciones en MongoDB
 * @type {*}
 */
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

/**
 * Implementamos el plugin para hacer filtros y paginaciones con mongoose
 */
CharactersSchema.plugin(mongoosePaginate);
/**
 * exportamos las diferentes modelos
 * @type {{Character_Rm: Model<InferSchemaType<*>, ObtainSchemaGeneric<*, "TQueryHelpers">, ObtainSchemaGeneric<*, "TInstanceMethods">, {}, *> & ObtainSchemaGeneric<*, "TStaticMethods">, Character_Hp_En: Model<InferSchemaType<*>, ObtainSchemaGeneric<*, "TQueryHelpers">, ObtainSchemaGeneric<*, "TInstanceMethods">, {}, *> & ObtainSchemaGeneric<*, "TStaticMethods">, Character_Hp: Model<InferSchemaType<*>, ObtainSchemaGeneric<*, "TQueryHelpers">, ObtainSchemaGeneric<*, "TInstanceMethods">, {}, *> & ObtainSchemaGeneric<*, "TStaticMethods">, Character_Rm_En: Model<InferSchemaType<*>, ObtainSchemaGeneric<*, "TQueryHelpers">, ObtainSchemaGeneric<*, "TInstanceMethods">, {}, *> & ObtainSchemaGeneric<*, "TStaticMethods">}}
 */
module.exports = {
    Character_Hp: model('Character_Hp', CharactersSchema, 'character_hp'),
    Character_Rm: model('Character_Rm', CharactersSchema, 'character_rm'),
    Character_Hp_En: model('Character_Hp_En', CharactersSchema, 'character_hp_en'),
    Character_Rm_En: model('Character_Rm_En', CharactersSchema, 'character_rm_en')
};