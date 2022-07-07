const {response} = require('express');
const {Character_Hp, Character_Rm, Character_Hp_En, Character_Rm_En} = require('../models/Character');
/**
 * de
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getCharactersHp = async (req, res = response) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let pageSize = req.query.pageSize ? Number(req.query.pageSize) : 20;
    let lang = req.query.lang ? req.query.lang : 'es';
    try {
        const filter = lang === 'es' ? Character_Hp : Character_Hp_En;
        await filter.paginate({}, {limit: pageSize, page }).then((result) => {
            const {docs, totalPages, totalDocs  } = result;
            docs.description = ''
            res.status(200).json({
                success: true,
                pages: totalPages,
                total: totalDocs,
                itemsPage: pageSize,
                countPage: page ,
                results: docs,
                message: 'Ok'
            })
        }).catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Parace que tenemos problemas para listar los datos.',
                error
            })
        });
    } catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Parace que tenemos problemas para listar los datos.',
            error
        })
    }
}

/**
 * de
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getCharactersRm = async (req, res = response) => {
    let page = Number(req.query.page) || 1;
    let pageSize = Number(req.query.pageSize) || 20;
    let lang = req.query.lang ? req.query.lang : 'es';
    try {
        const filter = lang === 'es' ? Character_Rm : Character_Rm_En;
        await filter.paginate({}, {limit: pageSize, page }).then((result) => {
            const {docs, totalPages, totalDocs} = result;
            res.status(200).json({
                success: true,
                pages: totalPages,
                total: totalDocs,
                itemsPage: pageSize,
                countPage: page,
                results: docs,
                message: 'Ok'
            })
        }).catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Parace que tenemos problemas para listar los datos.',
                error
            })
        });
    } catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Parace que tenemos problemas para listar los datos.',
            error
        })
    }
}
module.exports = {
    getCharactersHp,
    getCharactersRm
}