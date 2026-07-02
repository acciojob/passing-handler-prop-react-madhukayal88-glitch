import React from "react";

function ColourSelector({ colors, setSelectedColor }) {
  return (
    <div>
      {colors.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedColor(item.color)}
        >
          {item.color}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
