const mongoose  = require("mongoose");

let ProductSchema= new mongoose.Schema([{
    "nameCategory":String,
    "products":[{
        "name":String,
        "description":String,
        "price":Number,
        "units":Number,
        "pic":String,
        "age":String,
        "populare":Number,
        "salary":Boolean,  
        "date":Date
    }]
   
}])

let productModel = mongoose.model('products',ProductSchema)
module.exports = productModel;