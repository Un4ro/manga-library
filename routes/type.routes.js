const Router = require("express")
const typeController = require("../controllers/typeController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const router = new Router()


router.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.post('/update', checkRoleMiddleware('ADMIN'), typeController.updateOne)

module.exports = router