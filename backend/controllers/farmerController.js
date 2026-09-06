const farmerData = require('../data/farmers');

// Handles: GET /api/farmers
function getFarmers(req, res) {
  const farmers = farmerData.getAll();
  res.json(farmers);
}

// Handles: GET /api/farmers/:id
function getFarmer(req, res) {
  const farmer = farmerData.getById(req.params.id);
  if (!farmer) {
    return res.status(404).json({ message: "Farmer not found" });
  }
  res.json(farmer);
}

// Handles: POST /api/farmers
function registerFarmer(req, res) {
  const { name, village, crop, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: "Name and phone are required" });
  }

  const newFarmer = farmerData.create({ name, village, crop, phone });
  res.status(201).json(newFarmer);
}

module.exports = { getFarmers, getFarmer, registerFarmer };