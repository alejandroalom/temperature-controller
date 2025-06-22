import React from 'react';

const TemperatureControls = ({ onIncrease, onDecrease, onReset }) => {
  return (
    <div className="temperature-controls">
      <button onClick={onIncrease}>+ Aumentar</button>
      <button onClick={onDecrease}>- Disminuir</button>
      <button onClick={onReset}>Resetear</button>
    </div>
  );
};

export default TemperatureControls;
