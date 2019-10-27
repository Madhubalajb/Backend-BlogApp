const listHelper = require('../utils/list_helper')
const blogLists = require('../utils/blogLists')

describe('favorite Blog', () => {
    test('favorite Blog among the whole list', () => {
        expect(listHelper.favoriteBlog(blogLists.blogs)).toEqual(blogLists.blogs[2])
    })

    test('favorite blog among a list of one blog', () => {
        expect(listHelper.favoriteBlog(blogLists.listWithOneBlog)).toEqual(blogLists.listWithOneBlog[0])
    })

    test('favorite blog among empty list', () => {
        expect(listHelper.favoriteBlog(blogLists.emptyList)).toEqual(blogLists.emptyList[0])
    })
})