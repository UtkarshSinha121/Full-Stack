const {model, Schema} = require('../connection');

const myschema = new Schema({
    product: String,
    price: Number,
    company: String,
    model: String,
    review: String
});

 module.exports = model('addproduct', myschema);