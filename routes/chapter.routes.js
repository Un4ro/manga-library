const Router = require("express")
const chapterController = require("../controllers/chapterController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const router = new Router()


router.post('/',  chapterController.create)
router.get('/ch:id', chapterController.getOne)

module.exports = router