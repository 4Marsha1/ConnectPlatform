const asyncHandler = require('express-async-handler');

const updateProfile = asyncHandler(async (req, res) => {
    res.send('profile controller')
})

module.exports = {
    updateProfile
}