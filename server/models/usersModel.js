const mongoose  = require("mongoose");

let UsersSchema = new mongoose.Schema({
    "userName":String,
    "password":String,
    "firstName": String,
    "lastName": String,
    "phone": String,
    "email": String,
    "address": {
    "city": String,
    "street": String,
    "numBuild":Number,
     },
     "shoppingList": [{
        "status": String,
        "branch": String,
        "date":String,
        "shoppingListProducts":[{
            "id":String
        }]
    }],
})
let userModel = mongoose.model('users', UsersSchema)
module.exports = userModel;
