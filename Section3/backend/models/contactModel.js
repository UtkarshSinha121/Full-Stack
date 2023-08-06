const {model, Schema} = require('../connection');

const myschema = new Schema({
   name : String,
   email : String,
   phone : Number,
   message : String

});

 module.exports = model('contact', myschema);