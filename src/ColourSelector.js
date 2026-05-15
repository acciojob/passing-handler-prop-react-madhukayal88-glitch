import React from "react";

function ColourSelector({ color, setSelectedColor }) {
  return (
    <button onClick={() => setSelectedColor(color)}>
      {color}
    </button>
  );
}

export default ColourSelector;
