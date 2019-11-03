const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('../tests/test_helper')

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('identifier property of the blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
})

test('new blog addition', async () => {
    const newBlog = {
        title: 'unit testing in progress',
        author: 'Madhubala Jayakumaran',
        url: 'www.dummy.in',
        likes: 1
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const BlogsAtEnd = await helper.notesInDb()
    expect(BlogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
    
    const Blogs_title = BlogsAtEnd.map(blog => blog.title)
    expect(Blogs_title).toContain('unit testing in progress')
})

afterAll(() => {
    mongoose.connection.close()
})