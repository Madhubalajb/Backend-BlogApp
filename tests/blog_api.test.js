const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

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
})

afterAll(() => {
    mongoose.connection.close()
})