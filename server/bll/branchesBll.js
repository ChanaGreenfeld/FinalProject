const BranchesModel = require('../models/branchesModel')
const { google, createClient } = require("@google/maps");
const axios = require('axios');

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
  try {
    const apiKey = '';
    const origins = encodeURI(searchText);
    const destinations = encodeURI(addresses.map(obj => obj.address).join('|'));
    const baseURL = 'https://maps.googleapis.com/maps/api'
    const url = `${baseURL}/distancematrix/json?units=metric&origins=${origins}&destinations=${destinations}&key=${apiKey}`;
    const response = await axios.get(url);
    const elements = response.data.rows[0].elements;
    let closestPlace = null;
    let closestDistance = Infinity;
    for (let i = 0; i < elements.length; i++) {
      const distanceText = elements[i].distance.text;
      const distanceValue = elements[i].distance.value;
     
      if (distanceValue < closestDistance) {
        closestPlace = addresses[i];
        closestDistance = distanceValue;
        closestPlace.distance = distanceText;
    
      }
    }
      const geocodingUrl = `${baseURL}/geocode/json?address=${encodeURI(closestPlace.address)}&key=${apiKey}`;
       const geocodingResponse = await axios.get(geocodingUrl);
       const location = geocodingResponse.data.results[0].geometry.location;
       closestPlace.lat = location.lat;
       closestPlace.lng = location.lng;
      return closestPlace;
  } catch (error) {
    console.error(error.message);
  }

}

module.exports = { getAll, getBranchById, editBranch, addBranch, deleteBranch,searchShortestWay }
 