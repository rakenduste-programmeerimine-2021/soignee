const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.get("/:id", itemController.getItem)
router.get("/latest", itemController.getItemsLatest)
router.get("/myitems/:id", itemController.getItemsMyItems)
router.get("/search/:filter", itemController.getItemsFromSearch)
router.post("/create", itemController.createItem)
router.put("/update/:id", itemController.updateItem)
router.delete("/delete/:id", itemController.deleteItem)


module.exports = router