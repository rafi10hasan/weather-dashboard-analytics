

import ForcastBoard from "./components/Forcast/ForcastHourlyBoard";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";

function App() {
  return (
    <>
    <LocationProvider>
    <FavouriteProvider>
    <WeatherProvider>
      <div className="bg-body text-light h-auto pb-6">
        <Header />
        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[92vw] mx-auto">
            <WeatherBoard  />
            <ForcastBoard/>
          </section>
        </main>
      </div>

      </WeatherProvider>
      </FavouriteProvider>
      </LocationProvider>
    </>
  );
}

export default App;
