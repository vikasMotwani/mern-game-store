const express = require('express');
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();
const paginator = require('../middlewares/paginator')

productsApiRouter.get('/', paginator, productsApiController.getProducts)

// http://localhost:5000/api/products?sortBy=name&&order=des&&page=1&&search=inc

productsApiRouter.get('/:id', productsApiController.getProductInfo)


module.exports = productsApiRouter;