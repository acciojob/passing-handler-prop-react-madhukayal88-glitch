import React from "react";

function Selection({ selectedColor }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <div
        className="fix-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
          border: "1px solid black",
        }}
      ></div>

      <div
        className="fix-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
          border: "1px solid black",
        }}
      ></div>

      <div
        className="fix-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
}

export default Selection;
