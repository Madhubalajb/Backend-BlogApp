const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.get('/', async (request, response, next) => {
    const users = await User.find({}).populate('blogs', { title: 1, url: 1, likes: 1 })

    //populating blogs-- 'blogs' is the field in User model. 

    response.json(users.map(user => user.toJSON()))
})

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