const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { UnauthenticatedError } = require("../errors")

const auth = async (req, res, next) => {
  // Check header for authorization token
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid")
  }
  const token = authHeader.split(" ")[1]

  try {
    // Verify the JWT token
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    // Fetch the user from the database using the user ID from the token
    const user = await User.findById(payload.userId)
    if (!user) {
      throw new UnauthenticatedError("User not found")
    }

    // Attach the user ID to the request object
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid")
  }
}

module.exports = auth
