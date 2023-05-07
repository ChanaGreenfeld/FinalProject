const managerBll = require("../bll/managersBll");
const express = require("express");
const router=express.Router();



router.route("/GetAllManagers").get(async function (req, res){
  let data = await managerBll.getAll();
   res.send(data);
});

router.route("/ /:id").get(async function(req, res){
  let pid = req.params.id;
  let data = await managerBll.getManagerById(pid)
  res.send(data)
})

router.route("/EditManager/:id").put(async function(req, res){
  let pid = req.params.id;
  let manager = req.body;
  let data =await managerBll.editManager(pid,manager);
  res.send(data)
})
router.route("/AddManager").post(async function(req, res){
   let prod = req.body;
  let data =await managerBll.addManager(prod)
  res.send(data)
})
router.route("/DeleteManager/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await managerBll.deleteManager(pid)
 res.send(data)
})



module.exports=router