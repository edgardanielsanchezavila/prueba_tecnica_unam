import { useState } from "react";

const ZipForm = () => {
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous data and error
    setData(null);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/api/zip/${country}/${zipcode}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data->"+`http://localhost:3000/api/zip/${country}/${zipcode}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Get ZIP Code Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="country">Country Code: </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g., US"
            required
          />
        </div>
        <div>
          <label htmlFor="zipcode">ZIP Code: </label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder="e.g., 90210"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <h2>Location Details:</h2>
          <p>Country: {data.country}</p>
          <p>Country Code: {data.countryCode}</p>
          <ul>
            {data.places.map((place, index) => (
              <li key={index}>
                <p>City: {place.city}</p>
                <p>State: {place.state} ({place.stateAbbreviation})</p>
                <p>Latitude: {place.latitude}</p>
                <p>Longitude: {place.longitude}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ZipForm;
