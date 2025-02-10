import { useContext } from "react";
import tempMax from "../../assets/icons/temp-max.svg";
import windImg from '../../assets/icons/wind.svg'
import { WeatherContext } from "../../contexts";
import { getWeatherIcon } from "../../utils/weather-Icon";


export default function ForcastBoard() {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData.list);
  return (
    <>
    <div className="grid grid-cols-2 gap-2">
      
      {weatherData.list?.slice(0, 4).map((entry, index) => (
        <div
          className="bg-black/20 rounded-xl backdrop-blur-md  px-8 py-10 max-w-[350px] space-y-2"
          key={index}
        >
          <img src={getWeatherIcon(entry.weather[0].main)} alt="" />
          <h1 className="text-yellow-200">{new Date(entry.dt * 1000).toLocaleString()}</h1>
          <div className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temperature</span>
            <div className="inline-flex space-x-4">
              <p>{Math.round(entry.main.temp)}°</p>
              <img src={tempMax} alt="temp-max" />
            </div>
          </div>

                

          <div className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>{entry.wind.speed}km/h</p>
              <img src={windImg} alt="wind" />
            </div>
          </div>
 
        </div>
      ))}
      <h1></h1>
    </div>
    </>
  );
}
