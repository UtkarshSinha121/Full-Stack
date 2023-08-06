const {model, Schema} = require('../connection');

const myschema = new Schema({
    name: String,
    email: String,
    password: Number,
    age: Number
});

 module.exports = model('users', myschema);