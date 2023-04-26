const mongoose  = require("mongoose");

let managerSchema = new mongoose.Schema({
    "userName":String,
    "password":String,
    "firstName": String,
    "lastName": String,
    "branchName": String,
})
let managerModel = mongoose.model('managers', managerSchema)
module.exports = managerModel
