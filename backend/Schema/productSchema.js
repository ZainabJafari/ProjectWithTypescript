const mongoose = require('mongoose')
const { Schema } = mongoose;


const productSchema = new Schema({
    productName:        {type: String, required: true},
    description: {type: String, required: true},
    price:       {type: Number, required: true},
    imageURL:    {type: String, required: true},
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;