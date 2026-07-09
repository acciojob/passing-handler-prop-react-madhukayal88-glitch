import React, { useState } from "react";

function Selection({ selectedColor }) {
  const [color, setColor] = useState("");

  const handleClick = () => {
    setColor(selectedColor);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div
        className="fix-box"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>

      <div
        className="fix-box"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>

      <div
        className="fix-box"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default Selection;