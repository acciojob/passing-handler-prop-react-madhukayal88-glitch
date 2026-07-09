import React, { useState } from "react";

function Selection({ selectedColor }) {
  const [color, setColor] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <div
        className="fix-box"
        style={{ backgroundColor: color }}
        onClick={() => setColor(selectedColor)}
      ></div>
    </div>
  );
}

export default Selection;