const mongoose  = require("mongoose");

let BranchesSchema= new mongoose.Schema({
    "name":String,
    "address":String,
})

let branchModel = mongoose.model('branches',BranchesSchema)
module.exports = branchModel;