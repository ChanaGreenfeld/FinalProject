const mongoose  = require("mongoose");

let CategorySchema= new mongoose.Schema({
    "name":String
})

let categoryhModel = mongoose.model('category',CategorySchema)
module.exports = categoryhModel;