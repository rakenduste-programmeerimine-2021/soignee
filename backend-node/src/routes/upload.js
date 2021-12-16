const router = require("express").Router()
const uploadController = require("../controllers/upload")

router.get("/:filename", uploadController.getImage)

module.exports = router