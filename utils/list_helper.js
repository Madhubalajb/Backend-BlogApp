const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, current) => sum + current
    return blogs.map(blog => blog.likes).reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const max = Math.max(...blogs.map(blog => blog.likes))
    const fav = blogs.filter(blog => blog.likes == max)
    return fav[0]
}

const mostBlogs = (blogs) => {
    const authors = []
    blogs.forEach((item, index) => {
    let temp = authors.find(item => item.author === blogs[index].author)
    if(temp !== undefined) {
        let temp_index = authors.findIndex(item => item.author === blogs[index].author)
        authors[temp_index].blogs += 1
    }
    else {
        authors.push(
            {
              author: blogs[index].author,
              blogs: 1
            })
        }
    })
    const max = Math.max(...authors.map(item => item.blogs))
    const result = authors.filter(item => item.blogs == max)
    return result[0]
}

const mostLikes = (blogs) => {
    const fav = favoriteBlog(blogs)
    if(fav !== undefined) {
        const fav_author = fav.author
        let fav_likes = 0;
        blogs.forEach((item, index) => {
            if(item.author === fav_author)
                fav_likes += item.likes
        })
        return {
            author: fav_author,
            likes: fav_likes
        }
    }
    return {}
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}