import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = ["red", "green", "blue"];

  return (
    <div>
      <h1>Passing Handler Prop</h1>

      {colors.map((color) => (
        <ColourSelector
          key={color}
          color={color}
          setSelectedColor={setSelectedColor}
        />
      ))}

      <Selection selectedColor={selectedColor} />
    </div>
  );
}

export default App;
