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

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body
    if(body.title !== null) 
        let titleToUpdate = body.title
    if(body.author !== null)
        let authorToUpdate = body.author
    if(body.url !== null)
        let urlToUpdate = body.url
    
    const blogToUpdate = {
        title: titleToUpdate,
        author: authorToUpdate,
        url: urlToUpdate
    }

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blogToUpdate, { new: true })
        response.json(updatedBlog.toJSON())
    } catch(exception) {
        next(exception)
    }
})

module.exports = blogsRouter