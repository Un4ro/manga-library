const uuid = require('uuid')
const path = require('path')
const { Posts } = require('../models/models')
const ApiError = require('../error/apiError')

class PostsController {
    async create(req, res, next) {
        try {
            const {title, description, userId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"

            
            const isCreated = await Posts.findOne({where: {title}})
            if (isCreated) {return next(ApiError.badRequest('Произошла ошибка'))}
            
            img.mv(path.resolve(__dirname, '..', 'static', 'img', fileName))
            const dirPath = '/img/' + fileName

            const post = await Posts.create({title, description, img: dirPath, userId })
            
            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    
    async getAll(req, res) {
        let {page, limit } = req.query
        page = page || 1
        limit = limit || 3
        let offset = page * limit - limit
        let posts
        posts = await Posts.findAndCountAll({limit, offset})
        return res.json(posts)
    }

    // async getOne(req, res) {
    //     const {id} = req.params
    //     const stuff = await Stuff.findOne(
    //         {
    //             attributes: ['id', 'name', 'description', 'img'],
    //             where: {id},
    //             include: [{all: true}]
    //         }
    //     )
    //     return res.json(stuff)
    // }
}

module.exports = new PostsController()