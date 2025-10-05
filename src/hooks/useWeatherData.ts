import { useState, useEffect } from "react";
import { database, ref, onValue } from "../firebaseConfig";

interface WeatherData {
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
    const dbRef = ref(database, "/");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        setData(value);
      }
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return data;
};
