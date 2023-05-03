const loginBLL = require("../bll/loginBll");
const express = require("express");

const router=express.Router();



router.route("/Login").post(async function(req, res){  
    let use = req.body;
    let data =await loginBLL.Login(use.userName,use.password)
   return res.json(data);
  })
  
  module.exports=router