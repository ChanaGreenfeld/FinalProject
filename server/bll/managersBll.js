const managerModel = require("../models/managersModel");


const getAll = async() => {
    return await managerModel.find({})
}
const getManagerById = async(code) => {
    return await managerModel.findById(code) 
}
const addManager = async(newManager) => {
    const manager = new managerModel({
        userName:newManager.userName,
        password:newManager.password,
        firstName: newManager.firstName,
        lastName: newManager.lastName,
        branchName: newManager.branchName
      })
      await manager.save()
};
const editManager = async(code,newManager) => {
    await managerModel.findByIdAndUpdate(code, {
        userName:newManager.userName,
        password:newManager.password,
        firstName: newManager.firstName,
        lastName: newManager.lastName,
        branchName: newManager.branchName
      })
};
const deleteManager =async (code) => {
    await managerModel.findByIdAndDelete(code)
};


module.exports = { getAll, getManagerById ,editManager ,addManager, deleteManager};
