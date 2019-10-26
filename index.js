const app = require('./app') // Express app
const http = require('http')
const config = require('./utils/config') // for PORT

const server = http.createServer(app)

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})