const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{ versionKey : false,
    timestamps : true,
   });

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;
