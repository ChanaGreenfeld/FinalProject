const CategoryModel = require('../models/categoryModel')

const getAll = async () => {
  return await CategoryModel.find({})
}
const getCategoryById = async (code) => {
  return await CategoryModel.findById(code)
}
const getCategoryByName = async (name) => {
  return await CategoryModel.findOne({ name : name })
}
const addCategory = async (newCat) => {
  const category = new CategoryModel({
    name: newCat.name,
  })
  await category.save()
}
const editCategory = async (code, newCat) => {
  await CategoryModel.findByIdAndUpdate(code, {
    name: newCat.name
  })
}
const deleteCategory = async(code) => {
   await CategoryModel.findByIdAndDelete(code)
}

module.exports = { getAll, getCategoryById, getCategoryByName, editCategory, addCategory, deleteCategory }
