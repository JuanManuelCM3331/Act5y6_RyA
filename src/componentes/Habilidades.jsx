import React from 'react';

function Habilidades({ tecnologias }) {

  const getColor = (tech) => {
    if (tech === 'React') return '#61DBFB';
    else if (tech === 'JavaScript') return '#F7DF1E';
    else if (tech === 'Node.js') return '#68A063';
    else if (tech === 'HTML') return '#E44D26';
    else if (tech === 'CSS') return '#264DE4';
    else if (tech === 'Python') return '#3572A5';
    else return '#888';
  };

  return (
    <section>
      <h3>Tecnologías dominadas</h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tecnologias && tecnologias.length > 0 ? (
          tecnologias.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: getColor(tech),
                color: tech === 'JavaScript' ? '#000' : '#fff',
                padding: '6px 12px',
                borderRadius: '12px',
                fontWeight: '500',
                fontSize: '1rem',
              }}
            >
              {tech}
            </span>
          ))
        ) : (
          <p>No hay tecnologías registradas.</p>
        )}
      </div>
    </section>
  );
}

export default Habilidades;

