const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/User')
const helper = require('../tests/test_helper')

describe('when there is only one user in db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const user = new User({ username: 'madhu', password: 'dont'})
        await user.save()
    })

    test('creation suceeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDB()

        const newUser = {
            name: 'Dummy User',
            username: 'dummy',
            password: 'code'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-type', /application\/json/)

        const usersAtEnd = await helper.usersInDB()
        expect(usersAtStart.length).toBe(usersAtEnd.length + 1)

        const usernames = usersAtEnd.map(user => user.username)
        expect(usernames).toContain(newUser.username)
    })

    test('creation fails with proper statuscode and message if username already exits', async () => {
        const usersAtStart = await helper.usersInDB()

        const newUser = {
            name: 'Dummy User',
            username: 'dummy',
            password: 'code'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-type', /application\/json/)

        expect(result.body.error).toContain('`username` to be unique')   
         
        const usersAtEnd = await helper.usersInDB()
        expect(usersAtStart.length).toBe(usersAtEnd.length)
    })
})

afterAll(() => {
    mongoose.connection.close()
})