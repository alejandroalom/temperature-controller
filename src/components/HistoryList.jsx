import React from 'react';

const HistoryList = ({ history }) => {
  return (
    <div className="history-list">
      <h3>Historial de cambios:</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            [{entry.time}] → {entry.temperature}°C
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;

