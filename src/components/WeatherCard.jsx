// src/components/WeatherCard.jsx
export default function WeatherCard({ temperature, description }) {
  return (
    <div className="w-64 rounded-xl bg-white/80 backdrop-blur p-4 text-center shadow-md">
      <div className="text-4xl font-bold">{temperature}</div>
      <div className="text-sm mt-1">{description}</div>
    </div>
  );
}
