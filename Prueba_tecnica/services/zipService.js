// services/zipService.js
const axios = require('axios');
const ZipCode = require('../models/zipModel');

exports.getZipInfo = async (country, postalCode) => {
    const url = `http://api.zippopotam.us/${country}/${postalCode}`;

    try {
        const response = await axios.get(url);
        // Create an instance of ZipCode model
        const zipCodeData = new ZipCode(response.data);
        return zipCodeData; // Return the instance of the model
    } catch (error) {
        console.error('Error fetching data from Zippopotam:', error);
        throw error; // Propagate the error to the controller
    }
};
