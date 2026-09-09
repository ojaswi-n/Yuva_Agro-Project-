const connectDB = require('./config/db');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const farmerRoutes = require('./routes/farmerRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yuva Agro backend is running');
});

app.use('/api/farmers', farmerRoutes);
app.use('/api/disease', diseaseRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});