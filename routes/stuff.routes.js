const Router = require("express")
const stuffController = require("../controllers/stuffController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), stuffController.create)
router.get('/', stuffController.getAll)
router.get('/:id', stuffController.getOne)



module.exports = router