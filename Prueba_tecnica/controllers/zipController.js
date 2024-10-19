// controllers/zipController.js
const zipService = require('../services/zipService');

exports.getZipInfo = async (req, res) => {
    const { country, postalCode } = req.params;

    try {
        // Validate country and postalCode
        if (!country || !postalCode) {
            return res.status(400).json({ error: 'Country and postal code cannot be null' });
        }

        const zipData = await zipService.getZipInfo(country, postalCode);

        if (!zipData) {
            return res.status(404).json({ error: 'Zip information not found' });
        }

        res.status(200).json(zipData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving zip information' });
    }
};
