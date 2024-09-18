const mongoose = require('../utils/db_mongo')

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    relevance: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    publisher: {
        type: String,
        required: true
    },
    distributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Distributor',
        required: true
    }
}

const productSchema = mongoose.Schema(objectSchema);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;