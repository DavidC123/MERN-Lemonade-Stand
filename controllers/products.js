const Product = require('../models/Product');

// @desc Get all Employees
// @route GET /api/v1/employees
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        return res.status(200).json({
            success: true,
            count: products.length,
            data: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Add all Employees
// @route POST /api/v1/employees
exports.addProducts = async (req, res, next) => {
    try {
        const { name, price } = req.body;     //from models/Employee.js

        const product = await Product.create(req.body);

        return res.status(201).json({
            success: true,
            data: product
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({   //client error
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc Delete all Employees
// @route DEL /api/v1/employees/:id
exports.deleteProducts = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'No Employee found.'
            })
        }

        await product.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}