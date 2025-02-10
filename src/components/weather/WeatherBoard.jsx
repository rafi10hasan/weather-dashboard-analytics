import { useContext } from "react";
import { WeatherContext } from "../../contexts";
import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

export default function WeatherBoard() {

 const {loading} = useContext(WeatherContext);
 
  return (
    <div className="container">
  
        <div className="bg-black/20 rounded-xl backdrop-blur-md px-6 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-6">
            
            {
              loading.loading ? (<p>{loading.msg}</p>) : 
              <>
              <AddToFavourite/>
             <WeatherHeadline/>
             <WeatherCondition/>
              </>
            }
          
          </div>
        </div>
    </div>
  );
}
