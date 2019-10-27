const listHelper = require('../utils/list_helper')
const blogLists = require('../utils/blogLists')

describe('total likes', () => {
    test('total likes of the whole blog list', () => {
      const result = listHelper.totalLikes(blogLists.blogs)
      expect(result).toBe(36)
    })

    test('total likes of one blog', () => {
      const result = listHelper.totalLikes(blogLists.listWithOneBlog)
      expect(result).toBe(5)
    })

    test('total likes of empty list', () => {
      const result = listHelper.totalLikes(blogLists.emptyList)
      expect(result).toBe(0)
    })
})