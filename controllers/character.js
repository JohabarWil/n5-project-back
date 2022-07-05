const {response} = require('express');
const {Character_Hp, Character_Rm} = require('../models/Character');
/**
 * de
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getCharactersHp = async (req, res = response) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let pageSize = req.query.pageSize ? Number(req.query.pageSize) : 20;
    try {
        await Character_Hp.paginate({}, {limit: pageSize, page }).then((result) => {
            const {docs, totalPages, totalDocs  } = result;
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
    try {
        await Character_Rm.paginate({}, {limit: pageSize, page }).then((result) => {
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