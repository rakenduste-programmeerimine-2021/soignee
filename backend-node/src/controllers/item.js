const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.getItemsLatest = async (req, res) => {
  const items = await Item.find({}).sort({"createdAt": -1}).limit(9);
  
  res.status(200).send(items)
}

exports.getItemsMyItems = async (req, res) => {
  const { id } = req.params;
  
  const items = await Item.find({"user":`${ id }`})
  
  res.status(200).send(items)
}

exports.getItemsFromSearch = async (req, res) => {
  const { filter } = req.params;
  
  const items = await Item.find({"brandName" : {$regex : `${filter}`}});
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {

  const newItem = {
    brandName: req.body.brandName,
    model: req.body.model,
    quality: req.body.quality,
    description: req.body.description,
    photo: req.body.photo,
    price: req.body.price,
    user: req.body.user
  }

  const createdItem = new Item(newItem)

  const savedItem = await createdItem.save()

  res.status(200).send(`yay ${savedItem._id}`)
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndUpdate({ _id: id }, 
    { $set: { "name": req.body.name, "quality": req.body.quality, "approved": req.body.approved, "description": req.body.description, "user": req.body.user } }, 
    {returnOriginal: false})

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully updated the following item: \n ${item}`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)
}