const BranchesModel = require('../models/branchesModel')
const { google, createClient } = require("@google/maps");

const getAll = async () => {
  return await BranchesModel.find({})
}

const getBranchById = async (code) => {
  return await BranchesModel.findById(code)
}

const addBranch = async (newBranch) => {
  const branch = new BranchesModel({
    name: newBranch.name,
    address: newBranch.address,
  })
  await branch.save()
}

const editBranch = async (code, newBranch) => {
  await BranchesModel.findByIdAndUpdate(code, {
    name: newBranch.name,
    address: newBranch.address,
  })
}

const deleteBranch = async(code) => {
   await BranchesModel.findByIdAndDelete(code)
}

const searchShortestWay=async(searchText , addresses)=>{
    const googleMapsClient = createClient({
      Promis : Promise,
      key: 'Api',    
    }); 
    try {
       const formattedOrigins = encodeURIComponent(searchText.replace(/\s+/g, "+"));

      const formattedDestinations = addresses.map(add => encodeURIComponent(add.address.replace(/\s+/g, "+"))).join("|");
      console.log(formattedDestinations);
      const { json: { rows } } =  await googleMapsClient.distanceMatrix({
        origins: formattedOrigins,
        destinations: formattedDestinations,
        units: "metric",
      });
      console.log(results);
      let minDistance = null;
      let closestAddressIndex = null;
      rows[0].elements.forEach((element, index) => {
        if (minDistance === null || element.distance.value < minDistance) {
          minDistance = element.distance.value;
          closestAddressIndex = index;
        }
      });
      return addresses[closestAddressIndex];
    } catch (err) {
      console.error(err);
    }
}
// const search = async (searchText) => {
//   const config = {
//     method: 'get',
//     url: `${process.env.GOOGLE_MAPS_BASE_URL}/maps/api/place/textsearch/json`,
//     params: {
//       language: 'iw',
//       query: searchText,
//       key:'AIzaSyAFNmGpWn7RFLdSEi0dZgW6EtytaA_P-LE'
//     },
//   }
  
//   const response = await axios(config)
//   const nearby5Places = response.data.results.slice(0, 5)
//   const formatForResult = nearby5Places.map((n) => {
//     return { name: n.name, address: n.formatted_address }
//   })

//   await saveSearchText(searchText);
//   return formatForResult
// }
module.exports = { getAll, getBranchById, editBranch, addBranch, deleteBranch,searchShortestWay }
