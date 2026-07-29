import React, { useState } from 'react';

function Selection({ color, label }) {
  // useState to manage the box's background color
  const [boxColor, setBoxColor] = useState('#e9edf4');

  // Update the box color when the selected color changes
  React.useEffect(() => {
    if (color) {
      setBoxColor(color);
    }
  }, [color]); // Dependency array ensures this runs when 'color' prop changes

  return (
    <div 
      className="fix-box" // Required class name
      style={{
        background: boxColor,
        padding: '2rem 1rem',
        borderRadius: '1rem',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #e2e8f0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <span style={{
        fontSize: '1.1rem',
        fontWeight: '600',
        color: ['yellow', 'white', '#ffd700'].includes(boxColor) ? '#1a1a2e' : 'white',
        textShadow: ['yellow', 'white', '#ffd700'].includes(boxColor) ? 'none' : '0 1px 3px rgba(0,0,0,0.2)'
      }}>
        {label}
      </span>
      <span style={{
        fontSize: '0.8rem',
        marginTop: '0.5rem',
        color: ['yellow', 'white', '#ffd700'].includes(boxColor) ? '#1a1a2e' : 'rgba(255,255,255,0.8)',
        fontWeight: '400'
      }}>
        {color || 'No color selected'}
      </span>
    </div>
  );
}

export default Selection;
