const env = String(process.env.NODE_ENV)
if (env !== 'production') {
    require('dotenv').config()
}

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let SECRET = process.env.SECRET

if(env === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
    PORT,
    MONGODB_URI,
    SECRET
}