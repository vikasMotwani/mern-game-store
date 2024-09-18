const paginator = async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10
    const skipIndex = (page - 1) * limit;
    req.pagination = {
        page,
        limit,
        skipIndex
    }
    next()
}

module.exports = paginator