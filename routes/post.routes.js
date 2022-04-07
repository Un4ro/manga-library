const Router = require("express")
const postsController = require("../controllers/postsController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const router = new Router()

router.post('/', postsController.create)
router.get('/', postsController.getAll)
// router.get('/:id', postsController.getOne)



module.exports = router