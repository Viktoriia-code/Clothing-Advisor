export default function BackgroundSwitcher({ weatherType }) {
  if (weatherType === "sunny") {
    return (
      <div className="background sunny">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
      </div>
    );
  }

  if (weatherType === "rain") {
    return <div className="background rain"></div>;
  }

  if (weatherType === "snow") {
    return <div className="background snow"></div>;
  }

  return null;
}