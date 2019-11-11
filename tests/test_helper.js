const Blog = require('../models/blog')
const User = require('../models/User')

const initialBlogs = [
    {
        title: 'first blog',
        author: 'Madhubala Jayakumaran',
        url: 'www.first_blog.in',
        likes: 2
    },
    {
        title: 'second blog',
        author: 'someone',
        url: 'www.second_blog.in',
        likes: 3
    }
]

const nonExistingId = async () => {
    const blog = new Blog({title: 'removed soon', author: 'noone', url: 'www.removed.in'})
    await blog.save()
    await blog.remove()
    
    return blog._id.toString()
}

const notesInDb = async () => {
    const blogs = await Blog.find({})
    
    return blogs.map(blog => blog.toJSON())
}

const usersInDB = async () => {
    const users = await User.find({})

    return users.map(user => user.toJSON())
}
module.exports = {
    initialBlogs, nonExistingId, notesInDb, usersInDB
}