const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

console.log(`connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser:true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log(`error connection to MongoDB: ${error.message}`)
    })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)

module.exports = app