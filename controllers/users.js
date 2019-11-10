const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (request, response, next) => {
    try {
        const body = request.body

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds) 
    
        const newUser = new User({
           username: body.username,
           name: body.name,  
           passwordHash  
       })

       const savedUser = await newUser.save()

       response.status(201).json(savedUser)
    } catch(exception) {
        next(exception)
    }
})
module.exports = usersRouter