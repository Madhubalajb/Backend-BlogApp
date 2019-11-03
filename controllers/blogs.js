const blogsRouter = require('express').Router()
const Blog = require('../models/blog') //Mongoose model

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    
    if (body.title !== undefined && body.author !== undefined && body.url !== undefined) {
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes === undefined ? 0 : body.likes
        })
    
        try {
            const newBlog = await blog.save()
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