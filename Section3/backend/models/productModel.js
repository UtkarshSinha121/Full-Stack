const {model, Schema} = require('../connection');

const myschema = new Schema({
    tittle: String,
    description: String,
    price: Number,
    category: String,
    image: String

});

 module.exports = model('products', myschema);