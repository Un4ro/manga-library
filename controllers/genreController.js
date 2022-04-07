const { Genre } = require("../models/models")

class GenreController {
    async create(req, res) {
        const {name, description} = req.body
        const genre = await Genre.create({name, description})
        return res.json(genre)
    }
    
    async getAll(req, res) {
        const genre = await Genre.findAll()
        return res.json(genre)
    }

    // async getOne(req, res) {
        
    // }
}

module.exports = new GenreController()