require('dotenv').config();
const express = require('express');
const cors = require('cors');
const farmerRoutes = require('./routes/farmerRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yuva Agro backend is running');
});

app.use('/api/farmers', farmerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});