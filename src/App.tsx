import { useWeatherData } from "./hooks/useWeatherData";
import WeatherChart from "./components/WeatherChart";
import {
  WiThermometer,
  WiHumidity,
  WiBarometer,
  WiCloud,
} from "react-icons/wi";
import MetricCard from "./components/MetricCard";
import { WiSmoke } from "react-icons/wi";
import ChartCard from "./components/ChartCard";

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
  const last10Points = weatherData.slice(-10);

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Live Weather Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard
            title="Temperature"
            alert={last10Points[last10Points.length - 1]?.temperature > 35}
          >
            <WeatherChart
              data={last10Points}
              dataKey="temperature"
              color="#f87171"
            />
          </ChartCard>
          <ChartCard title="Humidity" alert={false}>
            <WeatherChart
              data={last10Points}
              dataKey="humidity"
              color="#3b82f6"
            />
          </ChartCard>

          <ChartCard title="Pressure" alert={false}>
            <WeatherChart
              data={last10Points}
              dataKey="pressure"
              color="#10b981"
            />
          </ChartCard>

          <ChartCard title="Altitude" alert={false}>
            <WeatherChart
              data={last10Points}
              dataKey="altitude"
              color="#fbbf24"
            />
          </ChartCard>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <MetricCard
          title="Temperature"
          value={last10Points[last10Points.length - 1]?.temperature}
          icon={WiThermometer}
          color="text-red-500"
          alert={last10Points[last10Points.length - 1]?.temperature > 35}
        />
        <MetricCard
          title="Humidity"
          value={last10Points[last10Points.length - 1]?.humidity}
          icon={WiHumidity}
          color="text-blue-500"
        />
        <MetricCard
          title="Pressure"
          value={last10Points[last10Points.length - 1]?.pressure}
          icon={WiBarometer}
          color="text-green-500"
        />
        <MetricCard
          title="Altitude"
          value={last10Points[last10Points.length - 1]?.altitude}
          icon={WiCloud}
          color="text-yellow-500"
        />
        <MetricCard
          title="PM2.5"
          value={last10Points[last10Points.length - 1]?.pm2_5}
          icon={WiSmoke}
          color="text-purple-500"
          alert={last10Points[last10Points.length - 1]?.pm2_5 > 50}
        />
        <MetricCard
          title="PM10"
          value={last10Points[last10Points.length - 1]?.pm10}
          icon={WiSmoke}
          color="text-pink-500"
          alert={last10Points[last10Points.length - 1]?.pm10 > 100}
        />
      </div>
    </>
  );
}

export default App;
