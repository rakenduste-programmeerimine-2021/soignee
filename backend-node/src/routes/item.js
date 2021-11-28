const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.get("/latest", itemController.getItemsLatest)
router.get("/myitems/:id", itemController.getItemsMyItems)
router.post("/create", itemController.createItem)
router.put("/update/:id", itemController.updateItem)
router.delete("/delete/:id", itemController.deleteItem)

module.exports = router