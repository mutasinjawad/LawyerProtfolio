// Login
const loginAdmin = async (req, res) => {
    res.json({mssg: 'Login Admin'});
}

// Signup
const signupAdmin = async (req, res) => {
    res.json({mssg: 'Signup Admin'});
}

module.exports = {
    loginAdmin,
    signupAdmin
}