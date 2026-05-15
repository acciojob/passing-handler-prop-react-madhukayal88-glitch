import React, { useState } from "react";
import ColourSelector from "./components/ColourSelector";
import Selection from "./components/Selection";

const colours = [
  { id: 1, colour: "red" },
  { id: 2, colour: "blue" },
  { id: 3, colour: "green" },
];

function App() {
  const [selectedColour, setSelectedColour] = useState("white");

  const handleColourChange = (colour) => {
    setSelectedColour(colour);
  };

  return (
    <div className="App">
      <ColourSelector colours={colours} onColourChange={handleColourChange} />
      <Selection selectedColour={selectedColour} />
      <Selection selectedColour={selectedColour} />
      <Selection selectedColour={selectedColour} />
    </div>
  );
}

export default App;
