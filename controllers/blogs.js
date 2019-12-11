const blogsRouter = require('express').Router()
const Blog = require('../models/Blog') //Mongoose model
const User = require('../models/User')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1})

    //populating users --- 'user' is the field in Blog model.

    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    
    if(!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    
    const user = await User.findById(decodedToken.id)
    

    if (body.title !== undefined && body.author !== undefined && body.url !== undefined) {
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes === undefined ? 0 : body.likes,
            user: user._id
        })
    
        try {
            const savedBlog = await blog.save()
            user.blogs = user.blogs.concat(savedBlog._id)
            await user.save()
            response.json(savedBlog.toJSON())
        }
        catch(exception) {
            next(exception)
        }
    }
    else {
        return response.status(400)
    }
})

blogsRouter.delete('/:id', getBlog, async (request, response, next) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    
    if(!decodedToken.id) {
        return response.status(401).error({ error: 'token missing or invalid' })
    }
    
    try {
        await response.person.remove()
        response.status(204).end()
    }
    catch(exception) {
        next(exception)
    }
})

blogsRouter.put('/:id', getBlog, async (request, response, next) => {
    const body = request.body
    if(body.title !== null) 
        response.blog.title = body.title
    if(body.author !== null)
        response.blog.author = body.author
    if(body.url !== null)
        response.blog.url = body.url
    if(body.likes !== null)
        response.blog.likes = body.likes

    try {
        const updatedBlog = await response.blog.save()
        response.json(updatedBlog)
    } catch(exception) {
        next(exception)
    }
})

async function getBlog(request, response, next) {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    let blog 
    try {
        blog = await Blog.findById(decodedToken.id)
        if(blog === null)
            return response.status(404).json({message: 'Cannot find blog'})
    } catch(exception) {
        next(exception)
    }
    response.blog = blog
    next()
} 

module.exports = blogsRouter