/**
 * This component render the current weather conditions and three days forecast
 * when a city is selected (or persisted in localstorage from a last session)
 *
 */

import { useDispatch, useSelector } from "react-redux";
import "../assets/MainComponentStyles.css";
import { getWeatherFromCoords } from "../auxFunctions/getWeatherFromCoords";
import { useEffect, useState } from "react";
import { addCityToShow } from "../store/appSlices";
import { Forecast } from "./Forecast";
import { getForecastFromCoords } from "../auxFunctions/getForecastFromCoords";
import { saveToLS } from "../auxFunctions/localStorageFncs";
import { ShowIcon } from "./ShowIcon";

export const MainComponent = () => {
  const [iconCode, setIconCode] = useState("");

  //selectedCity contain coords of the city selected to show
  const selectedCity = useSelector((state) => state.appStatus.selectedCity);

  //cityToShow contain wheather data retrieved from API
  const cityToShow = useSelector((state) => state.appStatus.cityToShow);

  const dispatch = useDispatch();

  useEffect(() => {
    //When selectedCity changes, read API to get new weather data
    if (!selectedCity.lat || !selectedCity.lon) {
      //If no data, leave useEffect
      return;
    }

    //The next function take current weather conditions and forecast data from two different endpoints
    const fetchWeatherData = async (lat, lon, api_key) => {
      const weatherData = await getWeatherFromCoords(lat, lon, api_key);
      let weatherDataJson = await weatherData.json();
      const cityForecast = await getForecastFromCoords(lat, lon, api_key);
      const cityForecastJson = await cityForecast.json();
      weatherDataJson = { ...weatherDataJson, forecast: cityForecastJson };

      //save info to LS
      saveToLS(weatherDataJson);

      //save info to store
      dispatch(addCityToShow(weatherDataJson));

      setIconCode(weatherDataJson.weather[0].icon);
    };

    fetchWeatherData(
      selectedCity.lat,
      selectedCity.lon,
      "72f48041605a4c0b54500dc4f2c94798"
    );
  }, [selectedCity]);

  return (
    <section className="weather-info">
      {!cityToShow && selectedCity.lan && <h2>Loading...</h2>}
      {!cityToShow && !selectedCity.lan && <h2>Waiting input...</h2>}
      {cityToShow && (
        <>
          <div className="temp">
            {/* <img src={icon} alt="" /> */}
            <ShowIcon iconCode={iconCode} />
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
  );
};
