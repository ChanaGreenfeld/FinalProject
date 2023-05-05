const userModel = require("../models/usersModel");
const usersModel = require("../models/usersModel")



const getAll =async () => {
   return await usersModel.find({});
};
const getUserById = async(code) => {
    return await usersModel.findById(code) 
};

const getUserByEmail=async(mail)=>{
    return await usersModel.findOne({ email: mail })
}

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
      return user;
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
const editUserShoppingList =async ( newShoppingList) => {
return await userModel.findOneAndUpdate({
    userName: newShoppingList.userName,
    password:newShoppingList.password
  },
  { $push: { shoppingList: newShoppingList.shoppingList } })
}

const deleteUser =async (code) => {
    await usersModel.findByIdAndDelete(code)
};


module.exports = { getAll, getUserById , getUserByEmail ,editUser,editUserShoppingList ,addUser, deleteUser};
