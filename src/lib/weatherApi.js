export async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=weather_code&timezone=auto`;
 
  const res = await fetch(url);
  const data = await res.json();
  const code = data.daily.weather_code[0];
  return { ...data, code };
}
