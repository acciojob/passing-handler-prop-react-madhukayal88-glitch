import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, classname, background } = config;

  return (
    <button 
      className={classname} 
      onClick={() => selectNextBackground({ background: background })}
      data-testid={config.key} // Optional, depending on test suite requirements
    >
      {label}
    </button>
  );
};

export default ColourSelector;
