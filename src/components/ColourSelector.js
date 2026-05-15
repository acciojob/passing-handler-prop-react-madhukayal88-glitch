import React from "react";

function ColourSelector({ colours, onColourChange }) {
  return (
    <div>
      {colours.map((item) => (
        <button
          key={item.id}
          onClick={() => onColourChange(item.colour)}
          style={{ backgroundColor: item.colour, margin: "5px", padding: "8px 16px" }}
        >
          {item.colour}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
