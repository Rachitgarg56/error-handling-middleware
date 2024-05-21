
const passwordValidation = (password) => {

    // atleast 8 characters
    if (password.length < 8) return false;
    
    // atleast one digit
    if (!(/\d/.test(password))) return false;

    // atleast one special character
    if (!(/[!@#$%^&*(),.?":{}|<>]/.test(password))) return false;

    // atleast one Capital letter
    if (!(/[A-Z]/.test(password))) return false;

    return true;

}

module.exports = passwordValidation;
