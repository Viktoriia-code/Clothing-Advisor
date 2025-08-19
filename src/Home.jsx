// src/Home.jsx
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./lib/weatherApi";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import './app.css';

function mapWeatherCode(code) {
  if (code === 0) return "sunny";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  return "sunny";
}

export default function Home() {
  const [weather, setWeather] = useState(null);

  const latitude = 60.17;
  const longitude = 24.94;

  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather(latitude, longitude);

      setWeather({
        temp: data.current.temperature_2m,
        wind: data.current.wind_speed_10m,
        weatherType: mapWeatherCode(data.daily.weather_code[0]),
      });
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="relative h-screen w-full">
      <BackgroundSwitcher weatherType={weather.weatherType} />

      <div className="absolute inset-0 flex items-center justify-center">
        <WeatherCard
          temperature={`${weather.temp}°C`}
          description={weather.weatherType}
        />
      </div>
    </div>
  );
}
