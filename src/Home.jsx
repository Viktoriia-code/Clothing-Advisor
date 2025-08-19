// src/Home.jsx
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./lib/weatherApi";
import OutfitInput from "./components/OutfitInput";

// import BackgroundSwitcher from "./components/BackgroundSwitcher";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import './app.css';

function mapWeatherCode(code) {
  if (code === 0) return "sunny";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  return "sunny";
}

function getOutfitSuggestion(temp, userInput) {
  if (temp < 5) {
    return `You plan to wear ${userInput}. It's very cold outside, better wear a thick coat or down jacket.`;
  }
  if (temp < 15) {
    return `You plan to wear ${userInput}. It's a bit chilly, consider adding a hoodie or jacket.`;
  }
  if (temp < 25) {
    return `You plan to wear ${userInput}. The temperature is comfortable, that should be totally fine.`;
  }
  return `You plan to wear ${userInput}. It's hot outside, light clothing should be enough.`;
}


export default function Home() {
  const [weather, setWeather] = useState(null);
  const [outfitSuggestion, setOutfitSuggestion] = useState("");

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
