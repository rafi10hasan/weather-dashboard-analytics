import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts";

let initialData = {
  location: "",
  climate: "",
  temperature: "",
  maxTemperature: "",
  minTemperature: "",
  humidity: "",
  cloudPercentage: "",
  wind: "",
  time: "",
  longitude: "",
  latitude: "",
  sunrise: "",
  sunset: "",
  list: [],
};

const useWeather = () => {
  const [weatherData,setWeatherData] = useState(initialData);
  const [loading,setLoading] = useState({
    loading: false,
    msg: "",
  });
  const [err,setError] = useState(null);
  const {selectedLocation} = useContext(LocationContext);
  

  const fetchedWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        loading: true,
        msg: "Fetched weather Data...",
      });

      //fetched data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      // get data after fetching 
      const data = await response.json();
  
      const forcastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedLocation.location || data?.name}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

      const {city,list} = await forcastResponse.json();

      const updateWeatherData = {
        ...weatherData,
        location: city?.name || data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
        sunrise: city?.sunrise || data?.sys?.sunrise,
        sunset: city?.sunset || data?.sys?.sunset,
        list: list
      };
      
      setWeatherData(updateWeatherData)

    } catch (err){
        setError(err)
    } finally {
        setLoading({
            ...loading,
            loading: false,
            message: "",
        });
    }
  };

  useEffect(()=>{
   
    setLoading({
        loading:true,
        msg:"finding Location..."
    })

    if(selectedLocation.latitude && selectedLocation.longitude){
     fetchedWeatherData(selectedLocation.latitude,selectedLocation.longitude)
    }

    else{
      navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position)
        fetchedWeatherData(
            position.coords.latitude,
            position.coords.longitude
        );
    })
    }
    

  },[selectedLocation.latitude,selectedLocation.longitude])


    return {
        weatherData,
        err,
        loading,
  }
};

export default useWeather;