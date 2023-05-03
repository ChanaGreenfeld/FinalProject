const productsBll = require("../bll/productBll");
const express = require("express");

const router=express.Router();

router.route("/GetAllProduct").get(async function (req, res){
  let data = await productsBll.getAll();
   res.send(data);
});
router.route("/page/:page").get(async function(req, res){
  let page = req.params.page;
 let data = await productsBll.getProductsPagination(page)
 res.send(data)
})
router.route("/categoryPage").get(async function(req, res){
  const pageNo = req.query.pageNo;
  const nameCategory = req.query.nameCategory;
 let data = await productsBll.getProductsCategoryPagination(pageNo,nameCategory)
 res.send(data)
})
router.route("/GetProductsByCatId/:id").get(async function(req, res){
  let pid = req.params.id;
  let data = await productsBll.getCatById(pid)
  res.send(data)
})
router.route("/getProductsByNameCategory/:name").get(async function(req, res){
  let name = req.params.name;
  let data = await productsBll.getProductByNameCategory(name)
  res.send(data)
})
router.route("/getProductsBySalary").get(async function(req, res){
  let data = await productsBll.getProductBySalary()
  res.send(data)
})

router.route("/age/:age").get(async function(req, res){
  let age = req.params.age;
  console.log(age);
  let data = await productsBll.getProductBySale(age);
  res.send(data)
})

router.route("/getProductsByDate").get(async function(req, res){
  let data = await productsBll.getProductsLastYear()
  res.send(data)
})
router.route("/getProductsById/:id").get(async function(req, res){
  let pid = req.params.id;
  let data = await productsBll.getProductById(pid)
  res.send(data)
})
router.route("/EditCategory/:id").put(async function(req, res){
  let pid = req.params.id;
  let prod = req.body;
  let data =await productsBll.editCategory(pid,prod);
  res.send(data)
})
router.route("/EditProduct/:id").put(async function(req, res){
  let pid = req.params.id;
  let prod = req.body;
  let data =await productsBll.editProduct(pid,prod);
  res.send(data)
})
router.route("/AddProduct").post(async function(req, res){
  let prod = req.body;
 let data =await productsBll.addProduct(prod)
 res.send(data)
})
router.route("/DeleteCategory/:id").delete(async function(req, res){
  let pid = req.params.id;
 let data =await productsBll.deleteCategory(pid)
 res.send(data)
})
router.route("/DeleteProduct/:id").delete(async function(req, res){
  let pid = req.params.id;
  let CodeCat = req.body;
  console.log(CodeCat);
 let data =await productsBll.deleteProduct(pid , CodeCat)
 res.send(data)
})


module.exports=router

