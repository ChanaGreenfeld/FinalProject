const branchesBll = require("../bll/branchesBll");
const express = require("express");
const router=express.Router();



router.route("/GetAllbranches").get(async function (req, res){
  let data = await branchesBll.getAll();
   res.send(data);
});
router.route("/GetbranchesById/:id").get(async function(req, res){
  let id = req.params.id;
  let data = await branchesBll.getBranchById(id)
  res.send(data)
})
router.route("/EditBranches/:id").put(async function(req, res){
  let id = req.params.id;
  let branch = req.body;
  let data =await branchesBll.editBranch(id,branch);
  res.send(data)
})
router.route("/AddBranch").post(async function(req, res){
   let branch = req.body;
  let data =await branchesBll.addBranch(branch)
  res.send(data)
})
router.route("/DeleteBranch/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await branchesBll.deleteBranch(pid)
 res.send(data)
})
router.route("/shortestWay/:search").get(async function (req, res){
  const  add  =  JSON.parse(req.query.data) ;
  const  searchText  = req.params.search;
  const data = await branchesBll.searchShortestWay(searchText, add);
   res.send(data);
});



module.exports=router