const Employee = require('../models/Employee');

// @desc Get all Employees
// @route GET /api/v1/employees
exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find();

        return res.status(200).json({
            success: true,
            count: employees.length,
            data: employees
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
exports.addEmployees = async (req, res, next) => {
    try {
        const { name, position, amount } = req.body;     //from models/Employee.js

        const employee = await Employee.create(req.body);

        return res.status(201).json({
            success: true,
            data: employee
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
exports.deleteEmployees = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                error: 'No Employee found.'
            })
        }

        await employee.remove();

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