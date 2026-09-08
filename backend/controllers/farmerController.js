const Farmer = require('../models/Farmer');

// GET /api/farmers
function getFarmers(req, res) {
    Farmer.find()
        .then(farmers => {
            res.json(farmers);
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
}

// GET /api/farmers/:id
function getFarmer(req, res) {
    Farmer.findById(req.params.id)
        .then(farmer => {
            if (!farmer) {
                return res.status(404).json({
                    message: "Farmer not found"
                });
            }

            res.json(farmer);
        })
        .catch(error => {
            res.status(500).json({
                message: error.message
            });
        });
}

// POST /api/farmers
function registerFarmer(req, res) {
    const { name, village, crop, phone } = req.body;

    if (!name || !phone) {
        return res.status(400).json({
            message: "Name and phone are required"
        });
    }

    const farmer = new Farmer({
        name,
        village,
        crop,
        phone
    });

    farmer.save()
        .then(newFarmer => {
            res.status(201).json(newFarmer);
        })
        .catch(error => {
            res.status(500).json({
                message: error.message
            });
        });
}

module.exports = {
    getFarmers,
    getFarmer,
    registerFarmer
};