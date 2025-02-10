import { useContext, useEffect, useState } from "react";
import heartRed from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../contexts";
export default function AddToFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const [isToggle, setIsToggle] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsToggle(found);
  }, []);

  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsToggle(!isToggle);
  };
  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleFavourites}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favourite</span>
            <img src={isToggle ? heartRed : heart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
