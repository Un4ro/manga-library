const Router = require("express")
const router = new Router()
const GenreRouter = require('./genre.routes')
const AuthorRouter = require('./author.routes')
const StuffRouter = require('./stuff.routes')
const TypeRouter = require('./type.routes')
const ChapterRouter = require('./chapter.routes')
const CategoryRouter = require('./category.routes')
const AuthRouter = require('./auth.routes')
const PostsRouter = require('./post.routes')

router.use('/genre', GenreRouter)
router.use('/author', AuthorRouter)
router.use('/stuff', StuffRouter)
router.use('/type', TypeRouter)
router.use('/chapter', ChapterRouter)
router.use('/category', CategoryRouter)
router.use('/user', AuthRouter)
router.use('/posts', PostsRouter)



module.exports = router