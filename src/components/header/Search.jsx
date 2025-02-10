import { useContext } from "react";
import searchImg from "../../assets/search.svg";
import { LocationContext } from "../../contexts";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { locationData, setSelectedLocation } = useContext(LocationContext);

  function handleSearchInput(e) {
    const value = e.target.value;
    doSearch(value);
  }

  const doSearch = useDebounce((term) => {
    if (term.length > 1) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${term}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data[0]) {
            setSelectedLocation({
              ...locationData,
              location: data[0]?.name,
              latitude: data[0]?.lat,
              longitude: data[0]?.lon,
            });
          }
        });
    }
  }, 1500);
 
  return (
    <>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none"
          type="search"
          placeholder="Find Location"
          required
          onChange={handleSearchInput}
        />
        <button type="submit">
          <img src={searchImg} />
        </button>
      </div>
    </>
  );
}
