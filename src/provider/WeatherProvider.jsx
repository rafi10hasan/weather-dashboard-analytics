import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, err } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, loading, err }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
