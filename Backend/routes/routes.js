const {
  getStacksByUser,
  listStacks,
  describeStacks,
  createStack,
  stackOutputs,
  updateStack,
  deleteStack,
} = require("../apis/controller")

const router = require("express").Router()

router
  .get("/get-stack", getStacksByUser)
  .get("/list-stacks", listStacks)
  .get("/stack-outputs/:stackName", stackOutputs)
  .get("/describe-stack/:stackName", describeStacks)
router
  .post("/deploy-stack", createStack)
  .put("/update-stack/:stackName", updateStack)
  .delete("/delete-stack/:stackName", deleteStack)

module.exports = router
