const listHelper = require('../utils/list_helper')
const blogList = require('../utils/blogLists')

describe('most blogs', () => {
    test('should return an empty array', () => {
        expect(listHelper.mostBlogs(blogList.emptyList)).toEqual(blogList.emptyList[0])
    })

    test('should return the author of blog for the list of one blog', () => {
        expect(listHelper.mostBlogs(blogList.listWithOneBlog)).toEqual({
            author: 'Edsger W. Dijkstra',
            blogs: 1
        })
    })

    test('should return the author of blog for the list of blogs', () => {
        expect(listHelper.mostBlogs(blogList.blogs)).toEqual({
            author: 'Robert C. Martin',
            blogs: 3
        })
    })
})