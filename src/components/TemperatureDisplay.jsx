import React from 'react';

const TemperatureDisplay = ({ temperature }) => {
  let message = '';

  if (temperature < 15) {
    message = '¡Hace frío!';
  } else if (temperature <= 25) {
    message = 'Temperatura agradable';
  } else {
    message = '¡Hace calor!';
  }

  return (
    <div className="temperature-display">
      <h2>Temperatura actual: {temperature}°C</h2>
      <p>{message}</p>
    </div>
  );
};

export default TemperatureDisplay;

