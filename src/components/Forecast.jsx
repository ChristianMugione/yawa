/*
 * This component show the section that have the three days forecast for the selected city.
 */

import { useEffect, useState } from "react";
import "../assets/ForecastStyles.css";
import { useSelector } from "react-redux";
import { ForecastCard } from "./ForecastCard";
import { calcThreeDaysForecast } from "../auxFunctions/calcThreeDaysForecast";

export const Forecast = () => {
  //Take data from store (Redux)
  const cityToShow = useSelector((state) => state.appStatus.cityToShow);
  const [dataFromCity, setDataFromCity] = useState([]);

  //When slice with city info is updated then take forecast of first three days (with slice(0,3)) and put it in useState dataFromCity
  //The component will render these info in three cards
  useEffect(() => {
    const threeDaysForecast = calcThreeDaysForecast(cityToShow.forecast.list);
    setDataFromCity(threeDaysForecast);
  }, [cityToShow]);

  return (
    <section className="forecast">
      {dataFromCity.map((item, index) => {
        return (
          <ForecastCard
            key={index}
            weekDay={item.weekDay}
            dayNumber={item.dayNumber}
            icon={item.dayForecast.icon}
            min={item.dayForecast.min}
            max={item.dayForecast.max}
            description={item.dayForecast.description}
          />
        );
      })}
    </section>
  );
};
