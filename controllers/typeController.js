const { Type } = require("../models/models")
const ApiError = require('../error/apiError')

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            const isCreate = await Type.findOne({where: {name}})
            if (isCreate) { return next(ApiError.badRequest("Такая вещь уже существет!"))}
            
            const CreateType = await Type.create({ name })
            return res.json(CreateType)
        } catch (e) {
            return next(ApiError.badRequest(e.messsage))
        }
    }

    async getAll(req, res, next) {
        try {
            const AllTypes = await Type.findAll()
            res.json(AllTypes)
        } catch (e) {
            return next(ApiError.badRequest(e.messsage))
        }
        
    }

    async getOne(req, res) {
        try {
            const {id} = req.query
            const oneType = await Type.findOne({where: {id}})
            res.json(oneType)
        } catch (e) {
            return next(ApiError.badRequest(e.messsage))
        }
    }

    async updateOne(req, res) {
        try {
            const {id, name} = req.body
            const updateType = await Type.update({name},{where: {id}})
            res.json(updateType)
        } catch (e) {
            return next(ApiError.badRequest(e.messsage))
        }
    }
}

module.exports = new TypeController()