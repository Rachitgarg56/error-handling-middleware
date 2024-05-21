const userModel = require('../models/user');
const passwordValidation = require('../services/passwordValidation');

const registerUser = async (req,res,next) => {
    try {
        const { firstname, lastname, email, phone, password } = req.body;

        // validaing first letters of firstname and lastname
        if (firstname[0] !== firstname[0].toUpperCase() || lastname[0] !== lastname[0].toUpperCase()) {
            const err = new Error('The first letter of the firstname and lastname must be capitalized.');
            err.statusCode = 400;
            return next(err);
        }

        // validating password
        if (!passwordValidation(password)) {
            const err = new Error('Password must have a minimum length of 8 characters and must contain at least one special character, one uppercase letter, and one numeric character.');
            err.statusCode = 400;
            return next(err);
        }

        // validating email
        if (!(/[@]/.test(email))) {
            const err = new Error('Invalid email address, Re-enter correct email.');
            err.statusCode = 400;
            return next(err);
        }

        // vaidating phone
        if (String(phone).length < 10) {
            const err = new Error('Invalid phone number, Re-enter correct number.');
            err.statusCode = 400;
            return next(err);
        }

        const userObj = req.body;
        const newUser = new userModel(userObj);
        await newUser.save();

        res.status(200).json({
            success: true,
            message: 'User registered successfully!',
            userId: newUser._id
        })

    } catch (err) {
        next(err);
    }
}

const userController = {
    registerUser,
}

module.exports = userController;
