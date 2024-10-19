// src/components/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [country, setCountry] = useState('US');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode) {
      onSearch(country, zipCode);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Selecciona un país:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="CA">Canada</option>
          {/* Agregar más países si es necesario */}
        </select>
      </label>

      <label>
        Ingresa el código postal:
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </label>

      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
