import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <h2>Weather in {weather.city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};

export default WeatherDisplay;
