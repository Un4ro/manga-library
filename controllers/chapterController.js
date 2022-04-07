const ApiError = require("../error/apiError")
const { Chapter } = require("../models/models")

class ChapterController {
    async create(req, res, next) {
        try {
            const {body, stuffId, chId} = req.body
            const chapter = await Chapter.create({body, stuffId, chId})
            return res.json(chapter)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    
    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        const {id} = req.params
        const chapters = await Chapter.findOne({where: {stuffId: id || null}})
        return res.json(chapters)
    }
}

module.exports = new ChapterController()