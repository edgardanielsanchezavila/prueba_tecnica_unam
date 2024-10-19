// src/components/SearchHistory.jsx
import React from 'react';

const SearchHistory = ({ history, onClearHistory }) => {
  if (history.length === 0) {
    return <p>No hay búsquedas recientes.</p>;
  }

  return (
    <div className="search-history">
      <h3>Últimos 5 códigos postales buscados:</h3>
      <ul>
        {history.slice(-5).map((item, index) => (
          <li key={index}>
            <strong>{item.zipCode}</strong> - {item.city}, {item.state}
          </li>
        ))}
      </ul>
      <button onClick={onClearHistory}>Limpiar Historial</button>
    </div>
  );
};

export default SearchHistory;
