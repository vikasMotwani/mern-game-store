const Product = require('../models/products')
// This middleware will help with public ids in case we need to post new products once the initial data is loaded

const publicIdHandler = async () => {
    try {
        let allIds = await Product.find({}).distinct('id');
        allIds.sort((a,b) => a - b)
        let idsBeforeAvailable = allIds.filter((id, i) => id === i + 1 )
        let newId = idsBeforeAvailable.length + 1;
        return newId
    } catch (err) {
        throw err
    }
}

module.exports = publicIdHandler