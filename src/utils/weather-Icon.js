import CloudIcon from "../assets/cloud.svg";
import HazeIcon from "../assets/haze.svg";
import SnowIcon from "../assets/icons/snow.svg";
import SunnyIcon from "../assets/icons/sunny.svg";
import RainIcon from "../assets/rainy.svg";
import ThunderIcon from "../assets/thunder.svg";

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }

  export {getWeatherIcon}