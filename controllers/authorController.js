const {Author} = require('../models/models')
// const ApiError = require('../error/apiError')

class AuthorController {
    async create(req, res) {
        const {name} = req.body
        const author = await Author.create({name})
        return res.json(author)
    }
    
    async getAll(req, res) {
        const authors = await Author.findAll()
        return res.json(authors)
    }

    async getOne(req, res) {
        const {id} = req.body
        const author = await Author.findOne({where: {id}})
        return res.json(author)
    }
}

module.exports = new AuthorController()