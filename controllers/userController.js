const bcrypt = require('bcryptjs/dist/bcrypt')

const jwt = require('jsonwebtoken')
const ApiError = require('../error/apiError')
const { User, Bookmark } = require('../models/models')

const generateJwt = (id, email, permission) => {
    return jwt.sign(
        {id, email, permission},
        process.env.SECRET_KEY,
        {expiresIn: '2h'})
}

class UserController {
    async register(req, res, next) {
        const {email, password, permission} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользоваетль уже существует'))
        }
        const hashedPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, permission, password: hashedPassword})
        const bookmark = await Bookmark.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.permission)
        return res.json({token})
    }

    async login(req, res, next) {

        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Ошибка при вводе email/password'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Ошибка при вводе email/password'))
        }
        const token = generateJwt(user.id, user.email, user.permission)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.permission)
        return res.json({token})
    }
}

module.exports = new UserController()

