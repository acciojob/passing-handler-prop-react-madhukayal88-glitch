import React, { useState } from 'react';

const Selection = (props) => {
  const { nextBackground } = props;
  // Initialize state to handle its own style/background
  const [style, updateSelectionStyle] = useState({ background: "" });

  return (
    <div 
      className="fix-box" 
      style={style} 
      onClick={() => updateSelectionStyle(nextBackground)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
