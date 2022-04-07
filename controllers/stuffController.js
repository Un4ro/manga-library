const uuid = require('uuid')
const path = require('path')
const { Stuff, Author, Type, StuffGenre, Genre } = require('../models/models')
const ApiError = require('../error/apiError')

class StuffController {
    async create(req, res, next) {
        try {
            const {name, description, authorId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"

            
            const isCreated = await Stuff.findOne({where: {name}})
            if (isCreated) {return next(ApiError.badRequest('Произошла ошибка'))}
            
            img.mv(path.resolve(__dirname, '..', 'static', 'img', fileName))
            const dirPath = '/img/'+fileName

            const stuff = await Stuff.create({name, description, authorId, typeId, img: dirPath})
            


            return res.json(stuff)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    
    async getAll(req, res) {
        let {typeId, authorId, page, limit } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let stuffs
        typeId = typeId || null
        authorId = authorId || null
        if (typeId && !authorId) {stuffs = await Stuff.findAndCountAll({where: {typeId, authorId}, limit, offset})}
        if (!typeId && authorId) {stuffs = await Stuff.findAndCountAll({where: {authorId}, limit, offset})}
        if (typeId && !authorId) {stuffs = await Stuff.findAndCountAll({where: {typeId} , limit, offset})}
        if (!typeId && !authorId) {stuffs = await Stuff.findAndCountAll({limit, offset})}
        return res.json(stuffs)
    }

    async getOne(req, res) {
        const {id} = req.params
        const stuff = await Stuff.findOne(
            {
                where: {id},
                include: [{all: true}]
            }
        )
        return res.json(stuff)
    }
}

module.exports = new StuffController()