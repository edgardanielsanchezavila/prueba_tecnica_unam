// models/zipModel.js
class ZipCode {
    constructor(data) {
        this.country = data.country;
        this.countryCode = data['country abbreviation'];
        this.places = data.places.map(place => ({
            city: place['place name'],
            state: place['state'],
            stateAbbreviation: place['state abbreviation'],
            latitude: place['latitude'],
            longitude: place['longitude']
        }));
    }
}

module.exports = ZipCode;
