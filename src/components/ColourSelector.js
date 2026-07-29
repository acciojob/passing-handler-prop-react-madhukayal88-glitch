import React from 'react';

function ColourSelector({ colors, onColorSelect, selectedColor }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.8rem',
      padding: '1rem',
      background: '#f8f9fa',
      borderRadius: '1rem',
      justifyContent: 'center'
    }}>
      {colors.map(({ id, color, label }) => (
        <button
          key={id}
          onClick={() => onColorSelect(color)}
          style={{
            padding: '0.6rem 1.2rem',
            borderRadius: '50px',
            border: selectedColor === color ? '3px solid #1a1a2e' : '2px solid #dce1e9',
            background: color,
            color: ['yellow', 'white'].includes(color) ? '#1a1a2e' : 'white',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minWidth: '70px',
            boxShadow: selectedColor === color ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
            transform: selectedColor === color ? 'scale(1.05)' : 'scale(1)'
          }}
          onMouseEnter={(e) => {
            if (selectedColor !== color) {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedColor !== color) {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
