const express = require('express');

// Controller functions
const { loginAdmin, signupAdmin } = require('../controllers/adminController');

const router = express.Router();

// Login
router.post('/login', loginAdmin)

// Signup
router.post('/signup', signupAdmin)

// Logout

module.exports = router;