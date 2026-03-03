import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "9c511a0464934765ff53d152e7879679";

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeatherData(response.data);
    } catch (err) {
      setError("City not found or API request failed.");
      setWeatherData(null);
    }
  };

  return (
    <section className="weather-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <article className="weather-card">
          <h2>{weatherData.name}</h2>
          <p>🌡 Temperature: {weatherData.main.temp}°C</p>
          <p>☁ Weather: {weatherData.weather[0].description}</p>
          <p>🌬 Wind Speed: {weatherData.wind.speed} m/s</p>
        </article>
      )}
    </section>
  );
}

export default Weather;