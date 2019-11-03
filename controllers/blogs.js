const blogsRouter = require('express').Router()
const Blog = require('../models/blog') //Mongoose model

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
    })

    try {
        const newBlog = await blog.save()
        response.json(newBlog.toJSON())
    }
    catch(exception) {
        next(exception)
    }
})

module.exports = blogsRouter