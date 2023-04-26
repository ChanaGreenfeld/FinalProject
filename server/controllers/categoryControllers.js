const categoryBll = require("../bll/categoryBll");
const express = require("express");
const router=express.Router();



router.route("/GetAllcategory").get(async function (req, res){
  let data = await categoryBll.getAll();
   res.send(data);
});


router.route("/GetcategoryById/:id").get(async function(req, res){
  let id = req.params.id;
  let data = await categoryBll.getCategoryById(id)
  res.send(data)
})

router.route("/GetcategoryByName/:name").get(async function(req, res){
  let name = req.params.name;
  let data = await categoryBll.getCategoryByName(name)
  res.send(data)
})

router.route("/EditCategory/:id").put(async function(req, res){
  let id = req.params.id;
  let branch = req.body;
  let data =await categoryBll.editCategory(id,branch);
  res.send(data)
})

router.route("/AddCategory").post(async function(req, res){
   let branch = req.body;
  let data =await categoryBll.addCategory(branch)
  res.send(data)
})

router.route("/DeleteCategory/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await categoryBll.deleteCategory(pid)
 res.send(data)
})

module.exports=router


