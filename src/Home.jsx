// src/pages/Home.jsx
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./lib/weatherApi";

export default function Home() {
  const [weather, setWeather] = useState(null);

  // 赫尔辛基经纬度
  const latitude = 60.17;
  const longitude = 24.94;

  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather(latitude, longitude);

      setWeather({
        temp: data.current.temperature_2m,
        wind: data.current.wind_speed_10m,
      });
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <WeatherCard
        temperature={`${weather.temp}°C`}
        description={`Wind ${weather.wind} m/s`}
      />
    </div>
  );
}
