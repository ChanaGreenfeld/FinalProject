const productsModel = require('../models/productsModel')

const getAll = async () => {
  return await productsModel.find({})
}

const getCatById = async (code) => {
  return await productsModel.findById(code)
}

const getProductByNameCategory = async (name) => {
  return await productsModel.findOne({ nameCategory: name })
}

const getProductBySalary = async () => {
  const pro = await productsModel.find({ 'products.salary': true })
  return pro.reduce((allProducts, product) => {
    allProducts.push(...product.products.filter((prod) => prod.salary === true))
    return allProducts
  }, [])
}

const getProductsLastYear = async () => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const allProducts = await productsModel.find();
  const result = []
  allProducts.forEach(category => {
    category.products.forEach(product => {
      if (product.date > oneYearAgo) {
        result.push(product);
      }
    });
  });
  return result;
}

const getProductById = async (productId) => {
  const allProducts = await productsModel.find();
  const result = []
  allProducts.forEach(category => {
    category.products.forEach(product => {
      if (product._id == productId) {
        result.push(product);
      }
    });
  });
  return result;
}

const editCategory = async (code, newProduct) => {
  await productsModel.findByIdAndUpdate(code, {
    nameCategory: newProduct.nameCategory,
    products: newProduct.products,
  })
}

const editProduct = async (codeProd, newProduct) => {
  try {
    const product = await productsModel.findOneAndUpdate(
      { 'products._id': codeProd },
      { $set: { newProduct } },
      { new: true },
    )
    return product
  } catch (error) {
    throw new Error(error)
  }
}
// try {
//   const result = await productsModel.findOneAndUpdate(
//     { nameCategory: nameCat.nameCategory , products: { _id: codeProd }  },
//     { $set: { 'products.$.products': newProduct } },
//     { new: true }
//   )
//   return result
// } catch (err) {
//   console.error(err)
// }

const addProduct = async (newProduct) => {
  const prod = await productsModel.findOne({
    nameCategory: newProduct.nameCategory,
  })
  if (prod) {
    return await productsModel.findOneAndUpdate(
      { nameCategory: newProduct.nameCategory },
      { $push: { products: newProduct.products } },
    )
  } else {
    const product = new productsModel({
      nameCategory: newProduct.nameCategory,
      products: newProduct.products,
    })
    return await product.save()
  }
}

const deleteCategory = async (code) => {
  await productsModel.findByIdAndDelete(code)
}

const deleteProduct = async (codeProd, nameCat) => {
  try {
    const product = await productsModel.findOneAndUpdate(
      { nameCategory: nameCat.nameCategory },
      { $pull: { products: { _id: codeProd } } },
      { new: true },
    )
    return product
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  getCatById,
  getProductById,
  getProductBySalary,
  getProductsLastYear,
  getProductByNameCategory,
  editCategory,
  editProduct,
  addProduct,
  deleteProduct,
  deleteCategory,
}
