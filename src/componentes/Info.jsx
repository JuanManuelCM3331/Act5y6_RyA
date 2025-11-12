import React from 'react';

function Info({ nombre, cargo, ubicacion, descripcion }) {
  return (
    <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1>{nombre}</h1>
      <h2 style={{ color: '#555' }}>{cargo}</h2>
      <p>{ubicacion}</p>
      <p style={{ maxWidth: '600px', margin: '0 auto', color: '#777' }}>
        {descripcion}
      </p>
    </section>
  );
}

export default Info;
