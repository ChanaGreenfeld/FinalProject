const usersModel = require("../models/usersModel")



const getAll =async () => {
   return await usersModel.find({});
};
const getUserById = async(code) => {
    return await usersModel.findById(code) 
};
const addUser =async (newUser) => {
    const user = new usersModel({
        userName:newUser.userName,
        password:newUser.password,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        email: newUser.email,
        address: newUser.address,
        shoppingList:newUser.shoppingList
      })
      await user.save()
};
const editUser =async (code,newUser) => {
    await usersModel.findByIdAndUpdate(code, {
        userName:newUser.UsersName,
        password:newUser.password,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        email: newUser.email,
        address: newUser.address,
      //  shoppingList:newUser.shoppingList
      })
};

const deleteUser =async (code) => {
    await usersModel.findByIdAndDelete(code)
};


module.exports = { getAll, getUserById ,editUser ,addUser, deleteUser};
