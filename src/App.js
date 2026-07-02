import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "blue" }
  ];

  return (
    <div className="App">
      <h2>Passing Handler Prop</h2>

      <ColourSelector
        colors={colors}
        setSelectedColor={setSelectedColor}
      />

      <Selection selectedColor={selectedColor} />
    </div>
  );
}

export default App;
