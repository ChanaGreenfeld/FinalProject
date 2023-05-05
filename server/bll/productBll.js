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

const getProductByAge = async (ageRange) => {
  const [minAge, maxAge] = ageRange.split('-').map((age) => parseInt(age.trim()));

   const products = await productsModel.find({});
   const filteredProducts = [];
   for (let category of products) {
     for (let product of category.products) {
       const [productMinAge,] = product.age.split('-').map((age) => parseInt(age.trim()));
       if (productMinAge >= minAge && productMinAge <= maxAge) {
         filteredProducts.push(product);
       }
     }
   }
   return filteredProducts;
}
const getProductsPopular=async()=>{
  const result = await productsModel.aggregate([
    { $unwind: "$products" },  // Expand the "products" array into separate documents
    { $sort: { "products.populare": -1 } },  // Sort by the "populare" field in descending order
    { $limit: 15 }  // Limit the results to the first 15
  ]);
  return result.map(doc => doc.products);
}

const getProductsLastYear = async () => {
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
  const allProducts = await productsModel.find()
  const result = []
  allProducts.forEach((category) => {
    category.products.forEach((product) => {
      if (product.date > oneYearAgo) {
        result.push(product)
      }
    })
  })
  return result
}

const getProductById = async (productId) => {
  const allProducts = await productsModel.find()
  const result = []
  allProducts.forEach((category) => {
    category.products.forEach((product) => {
      if (product._id == productId) {
        result.push(product)
      }
    })
  })
  return result
}
const getProductByIdAndUpdatePopular = async (id) => {
  const pro = await productsModel.findOne({ 'products._id': id })
  pro.products.id(id).populare++;
  return await pro.save();
}
const getProductByIdAndUpdateUnit = async (id) => {
  const pro2 = await productsModel.findOne({ 'products._id': id })
  if(pro2.products.id(id).units>0)
  pro2.products.id(id).units--;
  await pro2.save();
}

const editCategory = async (code, newProduct) => {
  await productsModel.findByIdAndUpdate(code, {
    nameCategory: newProduct.nameCategory,
    products: newProduct.products,
  })
}

const editProduct = async (productId, newProduct) => {
  const allProducts = await productsModel.find()
  allProducts.forEach((category) => {
    category.products.forEach((product) => {
      if (product._id == productId) {
        ;(product.name = newProduct.name),
          (product.description = newProduct.description),
          (product.price = newProduct.price),
          (product.units = newProduct.units),
          (product.pic = newProduct.pic),
          (product.age = newProduct.age),
          (product.populare = newProduct.populare),
          (product.salary = newProduct.salary),
          (product.date = newProduct.date)
      }
    })
    category.save()
  })
}

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

const getProductsPagination = async (pageNo) => {
  const pageSize = 20
  const skip = (pageNo - 1) * pageSize
  try {
    const allProducts = await productsModel.aggregate([
      { $unwind: '$products' },
      { $skip: skip },
      { $limit: pageSize },
      { $group: { _id: null, products: { $push: '$products' } } },
    ])

    const totalItems = (
      (await productsModel.aggregate([
        { $unwind: '$products' },
        { $group: { _id: null, totalProducts: { $sum: 1 } } },
      ])[0]) || { totalProducts: 0 }
    ).totalProducts

    return {
      products: allProducts[0].products,
      totalItems,
    }
  } catch (error) {
    throw new Error(error)
  }
}

const getProductsCategoryPagination = async (page, nameCategory) => {
  const limit = 12
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  try {
    const results = await productsModel.findOne({ nameCategory: nameCategory })
    const paginatedProducts = results.products.slice(startIndex, endIndex)
    return paginatedProducts
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  getProductsPagination,
  getProductsCategoryPagination,
  getCatById,
  getProductByAge,
    getProductById,
    getProductByIdAndUpdateUnit,
    getProductByIdAndUpdatePopular,
  getProductBySalary,
  getProductsLastYear,
  getProductsPopular,
  getProductByNameCategory,
  editCategory,
  editProduct,
  addProduct,
  deleteProduct,
  deleteCategory,
}
