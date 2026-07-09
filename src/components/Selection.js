import React, { useState } from "react";

function Selection({ selectedColor }) {
  const [color, setColor] = useState("");

  return (
    <div
      style={{ marginTop: "20px" }}
      onClick={() => setColor(selectedColor)}
    >
      <div
        className="fix-box"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default Selection;