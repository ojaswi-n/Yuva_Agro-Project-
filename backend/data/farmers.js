// This file simulates a database for now.
// Vaibhavi will later replace the insides of these functions with real MongoDB code —
// the function names (getAll, getById, create) will stay the same.

let farmers = [
    { id: 1, name: "Ram Prakash", village: "Kotake", crop: "Wheat", phone: "9876543210" },
    { id: 2, name: "Sita Devi", village: "Kotake", crop: "Mustard", phone: "9123456780" }
  ];
  
  let nextId = 3;
  
  function getAll() {
    return farmers;
  }
  
  function getById(id) {
    return farmers.find(f => f.id === Number(id));
  }
  
  function create(farmerData) {
    const newFarmer = { id: nextId++, ...farmerData };
    farmers.push(newFarmer);
    return newFarmer;
  }
  
  module.exports = { getAll, getById, create };