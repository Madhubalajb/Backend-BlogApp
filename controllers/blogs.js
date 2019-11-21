const blogsRouter = require('express').Router()
const Blog = require('../models/Blog') //Mongoose model
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('users')

    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body

    const token = getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if(!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await user.findById(decodedToken.id)
    
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
            response.json(newBlog.toJSON())
        }
        catch(exception) {
            next(exception)
        }
    }
    else {
        return response.status(400)
    }
})

blogsRouter.delete('/:id', getBlog, async (request, response) => {
    try {
        await response.person.remove()
        response.status(204).end()
    }
    catch(exception) {
        next(exception)
    }
})

blogsRouter.put('/:id', getBlog, async (request, response) => {
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
    let blog 
    try {
        blog = await Blog.findById(request.params.id)
        if(blog === null)
            return response.status(404).json({message: 'Cannot find blog'})
    } catch(exception) {
        next(exception)
    }
    response.blog = blog
    next()
}

module.exports = blogsRouter