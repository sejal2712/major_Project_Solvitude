require("dotenv").config()
require("express-async-errors")
const AWS = require("aws-sdk")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const authRouter = require("./routes/auth-router")
const router = require("./routes/routes")

app.get(`/test`, (req, res) => {
  res.json({
    success: 1,
    message: "This is hello from node backend",
  })
})

// Set the base path from the .env file
const connectDB = require("./db/connect")
// const basePath = process.env.BASE_PATH || "/"
// app.base = basePath

const authenticateUser = require("./middleware/authentication")

// error handler
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use("/auth", authRouter)
app.use("/", authenticateUser, router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// Configure AWS SDK with provided credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION, // Specify the AWS region you're working with
})

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
