import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
//import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = (city) => {
    const API_KEY = '7811d467959d4dd3b6d172941241608';
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;



//API Key: 37811d467959d4dd3b6d172941241608
//http://api.weatherapi.com/v1/current.json?key=7811d467959d4dd3b6d172941241608&q=London&aqi=no