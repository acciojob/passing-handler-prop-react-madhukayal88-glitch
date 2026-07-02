import React from "react";

function Selection({ selectedColor }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <div
        className="fix-box"
        style={{ backgroundColor: selectedColor }}
      ></div>

      <div
        className="fix-box"
        style={{ backgroundColor: selectedColor }}
      ></div>

      <div
        className="fix-box"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </div>
  );
}

export default Selection;
