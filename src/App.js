import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";
import "../styles/App.css";

const colourConfig = [
  { key: "blue", label: "Blue", classname: "btn-blue", background: "rgb(34, 193, 195)" },
  { key: "orange", label: "Orange", classname: "btn-orange", background: "rgb(253, 187, 45)" },
  { key: "green", label: "Green", classname: "btn-green", background: "rgb(34, 193, 95)" }
];

const title = "Select the colour and apply to any box";

const App = () => {
  // State to hold the configuration/background of the currently selected button
  const [nextBackground, selectNextBackground] = useState({ background: "" });

  return (
    <div id="main">
      <div className="row">
        <h1 className="title">{title}</h1>
      </div>
      
      {/* Pass the config and the selection handler to ColourSelector */}
      <div className="row">
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      {/* Render the three Selection boxes */}
      <div className="row">
        <Selection nextBackground={nextBackground} />
        <Selection nextBackground={nextBackground} />
        <Selection nextBackground={nextBackground} />
      </div>
    </div>
  );
};

export default App;
