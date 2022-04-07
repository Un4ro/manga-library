const Router = require("express")
const GenreController = require("../controllers/genreController")
const router = new Router()


router.post('/', GenreController.create)
router.get('/', GenreController.getAll)


module.exports = router