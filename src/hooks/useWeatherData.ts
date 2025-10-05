import { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig";

interface WeatherData {
  [key: string]: string | number | undefined;
  altitude?: number;
  humidity?: number;
  pressure?: number;
  temperature?: number;
  pm10?: number;
  pm2_5?: number;
  timestamp: string;
}

export const useWeatherData = () => {
  const [data, setData] = useState<Record<string, WeatherData>>({});

  useEffect(() => {
    const dbRef = ref(database, "/env_data");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        setData(value);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return data;
};
