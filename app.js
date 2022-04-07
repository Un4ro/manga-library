const express = require("express")
const config = require("config")
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHadlingMiddleware')
const path = require("path")
require("dotenv").config()
const PORT = config.get('port') || 5000


const app = express()
app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', require('./routes/main.routes.js'))

app.use(errorHandler)



async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    //    await mongoose.connect(config.get('mongoURI'), {
    //        useNewUrlParser: true,
    //        useUnifiedTopology: true,
    //        useCreateIndex: true
    //    })
    
        app.listen(PORT, () => console.log(`Приложение запущено на порте: ${PORT}...`))
    } catch (e) {
        console.log('Ошибка сервека', e.message)
        process.exit(1)
    }
}


start()
