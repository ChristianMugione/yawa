import { useDispatch, useSelector } from "react-redux";
import "../assets/MainComponentStyles.css";
import { getWeatherFromCoords } from "../auxFunctions/getWeatherFromCoords";
import { useEffect, useState } from "react";
import { addCityToShow } from "../store/appSlices";
import { Forecast } from "./Forecast";
import { getForecastFromCoords } from "../auxFunctions/getForecastFromCoords";
import { loadFromLS, saveToLS } from "../auxFunctions/localStorageFncs";

export const MainComponent = () => {
  const [icon, setIcon] = useState("");

  const selectedCity = useSelector((state) => state.appStatus.selectedCity);
  const cityToShow = useSelector((state) => state.appStatus.cityToShow);

  if (cityToShow) {
    console.log(cityToShow);
  }

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const weatherDataJson = loadFromLS();
  //   if (!weatherDataJson) {
  //     return;
  //   }

  //   // dispatch(addCityToShow(weatherDataJson));
  // }, []);

  useEffect(() => {
    //When selectedCity changes, i read API to get new weather data
    if (!selectedCity.lat || !selectedCity.lon) {
      //If no data
      return;
    }

    const fetchWeatherData = async (lat, lon, api_key) => {
      const weatherData = await getWeatherFromCoords(lat, lon, api_key);
      let weatherDataJson = await weatherData.json();
      const cityForecast = await getForecastFromCoords(lat, lon, api_key);
      const cityForecastJson = await cityForecast.json();
      weatherDataJson = { ...weatherDataJson, forecast: cityForecastJson };
      console.log(weatherDataJson);
      //save info to LS
      saveToLS(weatherDataJson);

      //save info to store
      dispatch(addCityToShow(weatherDataJson));

      const imgUrl =
        "https://openweathermap.org/img/wn/" +
        weatherDataJson.weather[0].icon +
        "@2x.png";
      setIcon(imgUrl);
    };
    fetchWeatherData(
      selectedCity.lat,
      selectedCity.lon,
      "72f48041605a4c0b54500dc4f2c94798"
    );
  }, [selectedCity]);

  return (
    <>
      <section className="weather-info">
        {cityToShow && (
          <>
            <div className="temp">
              <img src={icon} alt="" />
              <p className="temp-number">
                {Math.round(cityToShow.main.temp * 10) / 10}
              </p>
              <p className="temp-symbol">º</p>
            </div>
            <p className="city-name">
              {cityToShow.name}, {cityToShow.sys.country}
            </p>
            <p className="weather-description">{cityToShow.weather[0].main}</p>
            {cityToShow && <Forecast />}
          </>
        )}
      </section>
    </>
  );
};
