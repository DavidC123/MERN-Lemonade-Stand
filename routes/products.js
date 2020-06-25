const express = require('express');
const router = express.Router();
const { getProducts, addProducts, deleteProducts } = require('../controllers/products');

router.route('/')
    .get(getProducts)
    .post(addProducts);

router.route('/:id').delete(deleteProducts);

module.exports = router;
