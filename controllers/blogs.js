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

blogsRouter.delete('/:id', async (request, response) => {
    try {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    }
    catch(exception) {
        next(exception)
    }
})



module.exports = blogsRouter