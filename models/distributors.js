const mongoose = require('../utils/db_mongo');

const objectSchema = {
    distributor_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true 
    }
};

const distributorSchema = mongoose.Schema(objectSchema);

const Distributor = mongoose.model('Distributor', distributorSchema);

module.exports = Distributor;