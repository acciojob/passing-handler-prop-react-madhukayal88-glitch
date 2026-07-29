import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

// Color configuration
const colorConfig = [
  { id: 1, color: 'red', label: 'Red' },
  { id: 2, color: 'blue', label: 'Blue' },
  { id: 3, color: 'green', label: 'Green' },
  { id: 4, color: 'yellow', label: 'Yellow' },
  { id: 5, color: 'purple', label: 'Purple' },
  { id: 6, color: 'orange', label: 'Orange' }
];

function App() {
  // State to track the selected color
  const [selectedColor, setSelectedColor] = useState('');

  // Handler function to update the selected color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '2rem',
      background: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 40px -12px rgba(0, 20, 30, 0.15)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: '#1a1a2e'
      }}>
        🎨 Color Selector
      </h1>
      <p style={{ 
        color: '#4a5b6e',
        marginBottom: '2rem',
        borderLeft: '3px solid #3b82f6',
        paddingLeft: '0.75rem'
      }}>
        Click a color to change the boxes below
      </p>

      {/* ColourSelector Component - receives colors and handler */}
      <ColourSelector 
        colors={colorConfig}
        onColorSelect={handleColorSelect}
        selectedColor={selectedColor}
      />

      {/* Three Selection boxes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        <Selection 
          color={selectedColor}
          label="Box 1"
        />
        <Selection 
          color={selectedColor}
          label="Box 2"
        />
        <Selection 
          color={selectedColor}
          label="Box 3"
        />
      </div>

      <div style={{
        marginTop: '2rem',
        fontSize: '0.8rem',
        color: '#6b7d92',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '1.2rem'
      }}>
        Selected Color: <strong style={{ color: selectedColor || '#1a1a2e' }}>
          {selectedColor || 'None'}
        </strong>
      </div>
    </div>
  );
}

export default App;
