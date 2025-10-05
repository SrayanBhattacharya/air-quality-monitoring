import { useWeatherData } from "./hooks/useWeatherData";

function App() {
  const weatherData = useWeatherData();

  console.log("Live Weather Data:", weatherData);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">
        Firebase Live Dashboard 🚀
      </h1>
      <pre className="mt-4 p-4 bg-white rounded shadow">
        {JSON.stringify(weatherData, null, 2)}
      </pre>
    </div>
  );
}

export default App;
