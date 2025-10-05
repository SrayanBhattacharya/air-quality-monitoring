import { useWeatherData } from "./hooks/useWeatherData";
import WeatherChart from "./components/WeatherChart";

function App() {
  const weatherDataObj = useWeatherData();

  const weatherData = Object.values(weatherDataObj)
    .map((d) => ({
      timestamp: d.timestamp,
      altitude: d.altitude ?? 0,
      humidity: d.humidity ?? 0,
      pressure: d.pressure ?? 0,
      temperature: d.temperature ?? 0,
      pm10: d.pm10 ?? 0,
      pm2_5: d.pm2_5 ?? 0,
    }))
    .sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  console.log("Weather Data Array:", weatherData);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Live Weather Dashboard 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherChart
          data={weatherData}
          dataKey="temperature"
          color="#f87171"
        />
        <WeatherChart data={weatherData} dataKey="humidity" color="#3b82f6" />
        <WeatherChart data={weatherData} dataKey="pressure" color="#10b981" />
        <WeatherChart data={weatherData} dataKey="altitude" color="#fbbf24" />
      </div>
    </div>
  );
}

export default App;
