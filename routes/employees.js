const express = require('express');
const router = express.Router();
const { getEmployees, addEmployees, deleteEmployees } = require('../controllers/employees');

router.route('/')
    .get(getEmployees)
    .post(addEmployees);

router.route('/:id').delete(deleteEmployees);

module.exports = router;