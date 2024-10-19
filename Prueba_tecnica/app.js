// app.js
const express = require('express');
const dotenv = require('dotenv');
const zipRoutes = require('./routes/zipRoutes');
const cors = require('cors');
const zipService = require('./services/zipService'); // Make sure to update the path based on your project structure


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/zip', zipRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Exporte la aplicación para pruebas
module.exports = app;

//habilitar cors
app.use(cors());
