import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from '../components/WeatherForm.jsx';
import WeatherDisplay from '../components/WeatherDisplay.jsx';


const Home = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = () => {
    axios.get(`/api/weather?city=${city}`)
      .then(response => {
        setWeather(response.data);
        setError('');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          setError('City not found');
        } else {
          setError('An error occurred');
        }
        setWeather(null);
      });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Home;
