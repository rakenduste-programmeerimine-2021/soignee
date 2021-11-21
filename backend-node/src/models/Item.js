const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
  name: { type: String, required: true },
  quality: { type: Number, enum: [1,2,3,4,5,6,7,8,9,10], required: true },
  approved: { type: Boolean, default: true },
  description: { type: String,  default: '' },
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Item = model("Item", itemSchema)

module.exports = Item