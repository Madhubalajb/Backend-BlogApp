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
    return fav
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}