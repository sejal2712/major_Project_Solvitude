const AWS = require("aws-sdk")
const mongoose = require("mongoose")
const Stack = require("../models/Stack")
const fs = require("fs")

// Read the CloudFormation template file
const templateFilePath = "./final-react-deployer.yaml"
let templateBody

try {
  templateBody = fs.readFileSync(templateFilePath, "utf8")
} catch (err) {
  console.error("Error reading template file:", err)
  // Handle the error, perhaps by sending an error response to the client
}

const getStacksByUser = async (req, res) => {
  try {
    // Retrieve stacks associated with the authenticated user
    const stacks = await Stack.find({ user: req.user.userId })
    res.json(stacks)
  } catch (error) {
    console.error("Error fetching stacks by user:", error)
    res.status(500).json({ error: "Failed to fetch stacks by user" })
  }
}

const listStacks = async (req, res) => {
  try {
    const cloudformation = new AWS.CloudFormation()
    const data = await cloudformation.listStacks().promise()
    res.json(data.StackSummaries)
  } catch (error) {
    console.error("Error listing stacks:", error)
    res.status(500).json({ error: "Failed to list stacks" })
  }
}

const describeStacks = async (req, res) => {
  const { stackName } = req.params

  try {
    const cloudformation = new AWS.CloudFormation()
    const params = { StackName: stackName }
    const data = await cloudformation.describeStacks(params).promise()
    res.json(data.Stacks[0])
  } catch (error) {
    console.error("Error describing stack:", error)
    res.status(500).json({ error: "Failed to describe stack" })
  }
}

const createStack = async (req, res) => {
  const { stackName, repoUrl } = req.body
  const userId = req.user.userId // Assuming userId is available in the request

  try {
    // Generate a unique stack name by concatenating user ID with the provided name
    const uniqueStackName = `${stackName}-${userId}`

    // Read the CloudFormation template file
    let templateBody = fs.readFileSync(templateFilePath, "utf8")

    // Ensure repository URL ends with .git
    const formattedRepoUrl = repoUrl.endsWith(".git")
      ? repoUrl
      : `${repoUrl}.git`

    // Extract repository name from the URL
    const repoName = formattedRepoUrl.split("/").pop().replace(".git", "")

    // Replace the RepoUrl and RepoName placeholders in the CloudFormation template
    templateBody = templateBody.replace(/{{RepoUrl}}/g, formattedRepoUrl)
    templateBody = templateBody.replace(/{{RepoName}}/g, repoName)

    const cloudformation = new AWS.CloudFormation()
    const params = {
      StackName: uniqueStackName,
      TemplateBody: templateBody,
    }

    // Ensure user ID is attached to the stack before creating it
    const stack = new Stack({ name: uniqueStackName, user: userId })
    await stack.save()

    const data = await cloudformation.createStack(params).promise()
    res.json({
      message: `Stack '${uniqueStackName}' created successfully`,
      data,
    })
  } catch (error) {
    console.error("Error deploying stack:", error)
    res.status(500).json({ error: "Failed to deploy stack" })
  }
}

const stackOutputs = async (req, res) => {
  const { stackName } = req.params

  try {
    const cloudformation = new AWS.CloudFormation()
    const params = { StackName: stackName }
    const data = await cloudformation.describeStacks(params).promise()
    const outputs = data.Stacks[0].Outputs
    res.json(outputs)
  } catch (error) {
    console.error("Error getting stack outputs:", error)
    res.status(500).json({ error: "Failed to get stack outputs" })
  }
}

const updateStack = async (req, res) => {
  const { stackName } = req.params
  const { templateBody } = req.body

  try {
    const cloudformation = new AWS.CloudFormation()
    const params = { StackName: stackName, TemplateBody: templateBody }
    const data = await cloudformation.updateStack(params).promise()
    res.json({ message: `Stack '${stackName}' updated successfully`, data })
  } catch (error) {
    console.error("Error updating stack:", error)
    res.status(500).json({ error: "Failed to update stack" })
  }
}

const deleteStack = async (req, res) => {
  const { stackName } = req.params

  try {
    // Delete the stack entry from the database
    await Stack.findOneAndDelete({ name: stackName, user: req.user.userId })

    // Delete the stack using the AWS SDK
    const cloudformation = new AWS.CloudFormation()
    const params = {
      StackName: stackName,
    }
    const data = await cloudformation.deleteStack(params).promise()

    res.json({
      message: `Stack '${stackName}' deleted successfully`,
      data,
    })
  } catch (err) {
    console.error("Error deleting stack:", err)
    res.status(500).json({ error: "Failed to delete stack" })
  }
}

module.exports = {
  getStacksByUser,
  listStacks,
  describeStacks,
  createStack,
  stackOutputs,
  updateStack,
  deleteStack,
}
