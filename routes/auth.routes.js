const {Router} = require("express")
const UserController = require('../controllers/userController')


const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
// const User = require("../models/User")
const req = require("express/lib/request")
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()


// /api/register
router.post('/register', UserController.register)

// /api/login
router.post('/login', UserController.login)

// /api/check
router.get('/auth', authMiddleware, UserController.check)


module.exports = router