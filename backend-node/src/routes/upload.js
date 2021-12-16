const router = require("express").Router()
const uploadController = require("../controllers/upload")

router.get("/", uploadController.getImages)
router.post("/upload-image", uploadController.uploadImage)
//router.post("/upload-image-mongo", uploadController.uploadImageWithMongo)

module.exports = router