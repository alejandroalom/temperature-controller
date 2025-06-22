import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureControls from './components/TemperatureControls';
import HistoryList from './components/HistoryList';

// funcion iniciar temp desde localStorage
const getInitialTemperature = () => {
  const storedTemp = localStorage.getItem('currentTemperature');
  return storedTemp !== null ? Number(storedTemp) : 20;
};

const App = () => {
  const [temperature, setTemperature] = useState(getInitialTemperature);
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem('temperatureHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  // guardar temp en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('currentTemperature', temperature);
  }, [temperature]);

  // guardar historial cada vez que cambia
  useEffect(() => {
    localStorage.setItem('temperatureHistory', JSON.stringify(history));
  }, [history]);

  // subir temp
  const increaseTemperature = () => {
    const newTemp = temperature + 1;
    if (newTemp <= 40) {
      setTemperature(newTemp);
      addToHistory(newTemp);
    }
  };

  // bajar temp
  const decreaseTemperature = () => {
    const newTemp = temperature - 1;
    if (newTemp >= 0) {
      setTemperature(newTemp);
      addToHistory(newTemp);
    }
  };

  // reset temp e historial
  const resetTemperature = () => {
    setTemperature(20);
    setHistory([]);
    localStorage.removeItem('currentTemperature');
    localStorage.removeItem('temperatureHistory');
  };

  // añadir al historial
  const addToHistory = (temp) => {
    const time = new Date().toLocaleTimeString();
    const newEntry = { time, temperature: temp };
    setHistory(prev => [...prev, newEntry]);
  };

  return (
    <div className="app">
      <h1>Controlador de Temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls 
        onIncrease={increaseTemperature}
        onDecrease={decreaseTemperature}
        onReset={resetTemperature}
      />
      <HistoryList history={history} />
    </div>
  );
};

export default App;






