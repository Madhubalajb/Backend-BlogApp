const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('../tests/test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})

    for(let blog of helper.initialBlogs) {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }
})

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
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const BlogsAtEnd = await helper.notesInDb()
    expect(BlogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
    
    const Blogs_title = BlogsAtEnd.map(blog => blog.title)
    expect(Blogs_title).toContain('unit testing in progress')
})

test('blog without like property can be added with default 0', async () => {
    const newBlog = {
        title: 'dummy testing',
        author: 'Madhubala Jayakumaran',
        url: 'www.dummy1.in'
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const BlogsAtEnd = await helper.notesInDb()
    expect(BlogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

    const blog_with_no_likes = await Blog.find({title: 'dummy testing'})
    expect(blog_with_no_likes[0].likes).toBe(0)
})

test('return 400 code when title and url properties are missing', async () => {
    const dummyBlog = {
        author: "Madhubala Jayakumaran"
    }

    await api
        .post('/api/blogs')
        .send(dummyBlog)
        .expect(400)

    const BlogsAtEnd = await helper.notesInDb()
    expect(BlogsAtEnd.length).toBe(helper.initialBlogs.length)
})

test('deletion of a blog return 204', async () => {
    const BlogsAtStart = await helper.notesInDb()
    const blogToDelete = BlogsAtStart[0]
    
    await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

    const BlogsAtEnd = await helper.notesInDb()
    expect(BlogsAtEnd.length).toBe(helper.initialBlogs.length - 1)

    const blogTitles = BlogsAtEnd.map(blog => blog.title)
    expect(blogTitles).not.toContain(blogToDelete.title)
})

afterAll(() => {
    mongoose.connection.close()
})