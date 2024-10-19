// src/components/ZipInfo.jsx
import React from 'react';

const ZipInfo = ({ zipData }) => {
  if (!zipData) {
    return <p>No hay resultados para mostrar.</p>;
  }

  if (!zipData.places || zipData.places.length === 0) {
    return <p>No se encontraron lugares asociados a este código postal.</p>;
  }

  return (
    <div className="zip-info">
      <h3>Resultados:</h3>
      {zipData.places.map((place, index) => (
        <div key={index}>
          <p><strong>Ciudad:</strong> {place['place name']}</p> {/* Mostramos la ciudad */}
          <p><strong>Estado:</strong> {place['state']}</p> {/* Mostramos el estado */}
          <p><strong>Latitud:</strong> {place.latitude}</p> {/* Mostramos la latitud */}
          <p><strong>Longitud:</strong> {place.longitude}</p> {/* Mostramos la longitud */}
        </div>
      ))}
    </div>
  );
};

export default ZipInfo;
