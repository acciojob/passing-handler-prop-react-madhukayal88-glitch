import React, { useState } from "react";

function Selection({ selectedColour }) {
  const [style, setStyle] = useState({ backgroundColor: "white" });

  const handleClick = () => {
    setStyle({ backgroundColor: selectedColour });
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={style}
    />
  );
}

export default Selection;
