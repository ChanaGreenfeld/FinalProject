const userBll = require("../bll/usersBll");
const express = require("express");

const router=express.Router();



router.route("/GetAllUsers").get(async function (req, res){
  let data = await userBll.getAll();
   res.send(data);
});
router.route("/GetUserById/:id").get(async function(req, res){
  let pid = req.params.id;
  let data = await userBll.getUserById(pid)
  res.send(data)
})

router.route("/GetUserByMail/:mail").get(async function(req, res){
  let mail = req.params.mail;
  let data = await userBll.getUserByEmail(mail)
  res.send(data)
})
router.route("/EditUser/:id").put(async function(req, res){
  let pid = req.params.id;
  let prod = req.body;
  let data =await userBll.editUser(pid,prod);
  res.send(data)
})

router.route("/EditUserShoppingList").post(async function(req, res){
  let user = req.body;
  let data =await userBll.editUserShoppingList(user);
  res.send(data)
})


router.route("/AddUser").post(async function(req, res){
   let user = req.body;
  let data =await userBll.addUser(user)
  res.send(data)
})
router.route("/DeleteUser/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await userBll.deleteUser(pid)
 res.send(data)
})

module.exports=router