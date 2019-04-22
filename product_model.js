var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    category: String
});

module.exports = mongoose.model('Product', productSchema);