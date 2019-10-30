const listHelper = require('../utils/list_helper')
const blogList = require('../utils/blogLists')

describe('most likes', () => {
    test('should return empty array', () => {
        expect(listHelper.mostLikes(blogList.emptyList)).toEqual({})
    })

    test('should return author of blog for the list of one blog', () => {
        expect(listHelper.mostLikes(blogList.listWithOneBlog)).toEqual({
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
    })

    test('should return author of blog with most likes from the list', () => {
        expect(listHelper.mostLikes(blogList.blogs)).toEqual({
            author: 'Edsger W. Dijkstra',
            likes: 17
        })
    })
})