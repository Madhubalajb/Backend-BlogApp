const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, current) => sum + current

    return blogs.map(blog => blog.likes).reduce(reducer, 0)
}

module.exports = {
    dummy,
    totalLikes
}