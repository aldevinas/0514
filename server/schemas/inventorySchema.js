const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const inventorySchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("inventoryModel", inventorySchema)