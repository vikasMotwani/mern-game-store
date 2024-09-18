const Distributor = require('../models/distributors')
const Product = require('../models/products')


const getProducts = async (req, res) => {
    const { sortBy, order, search } = req.query;
    const { limit, skipIndex } = req.pagination;
    const sortConfig = {};
    const query = {};
    if (search) {
        const distributors = await Distributor.find( // array of distributors objects of _id that match the search
            { distributor_name: { $regex: search, $options: "i" } },
            { _id: 1 } 
        );
        const distributorsIds = distributors.map(distributor => distributor._id); // array with objects to array with _id that matchs
        query.$or = [
            { name: { $regex: search, $options: "i" } },
            { distributor: { $in: distributorsIds } } //search by name oof prooducts and if of manufacturer
        ];
    }
    if (sortBy && order) {
        sortConfig[sortBy] = order === 'asc' ? 1 : -1
    }
    try {
        const products = await Product.find(query, '-_id -__v -distributor')
            .populate('distributor', 'distributor_name -_id')
            .sort(sortConfig)
            .skip(skipIndex)
            .limit(limit + 1) // We take 11 to check if there is more than ten and send that info too

        const hasMore = products.length > limit;
        if (hasMore){
            products.pop() 
        }
        res.status(200).json({ products, hasMore }) // a products array and a boolean to control the page buttons
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const getProductInfo = async (req, res) => {
    const {id} = req.params;
    try {
        let product = await Product.findOne({ id }, { "_id": 0, "__v": 0 }).populate('distributor', '-_id -__v'); // []
        if (product) {
            res.status(200).json(product); // 
        }
        else {
            res.status(404).json({ message: "product with id " + req.params.id + " not found"}); 
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }

}

module.exports = {
    getProducts,
    getProductInfo
}