// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ZipInfo from './components/ZipInfo';
import SearchHistory from './components/SearchHistory';

const App = () => {
  const [zipData, setZipData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (country, zipCode) => {
    try {
      setError(null); // Reseteamos el error antes de hacer la solicitud
      //const response = await axios.get(`http://localhost:3000/api/zip/${country}/${zipCode}`);
      const response = await axios.get(`https://api.zippopotam.us/${country}/${zipCode}`);
      const data = response.data;

      setZipData(data); // Almacenamos la respuesta completa

      // Agregar al historial de búsqueda
      const newEntry = {
        zipCode,
        city: data.places[0]['place name'], // Accedemos correctamente al 'place name'
        state: data.places[0]['state'], // Accedemos correctamente al 'state'
      };

      setSearchHistory((prevHistory) => [...prevHistory, newEntry]);
    } catch (error) {
      console.error('Error fetching ZIP code data:', error);
      setError('No se pudo obtener la información del código postal. Por favor, verifica el código o intenta nuevamente.');
      setZipData(null); // En caso de error, limpiamos los datos
    }
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="app">
      <h1>Búsqueda de Códigos Postales</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostramos el error si existe */}
      <ZipInfo zipData={zipData} />
      <SearchHistory history={searchHistory} onClearHistory={handleClearHistory} />
    </div>
  );
};

export default App;
