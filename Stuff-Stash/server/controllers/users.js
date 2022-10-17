const User = require('../models/user')

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc      Add user
// @route     POST /api/v1/users/createUser
// @access    Public
exports.addUser = async (req, res, next) => {
  const { username, password, organizationID } = req.body
  try {
    const user = await User.create(req.body)
    return res.status(201).json({
      success: true,
      data: user
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)
      return res.status(400).json({
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
