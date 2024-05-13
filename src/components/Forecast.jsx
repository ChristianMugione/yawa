/*
 * This component show the section that have the three days forecast for the selected city.
 */

import { useEffect, useState } from "react";
import "../assets/ForecastStyles.css";
import { useSelector } from "react-redux";
import { ForecastCard } from "./ForecastCard";

export const Forecast = () => {
  //Take data from store (Redux)
  const cityToShow = useSelector((state) => state.appStatus.cityToShow);
  const [dataFromCity, setDataFromCity] = useState([]);

  //When slice with city info is updated then take forecast of first three days (with slice(0,3)) and put it in useState dataFromCity
  //The component will render these info in three cards
  useEffect(() => {
    setDataFromCity(
      cityToShow.forecast.list.slice(0, 3).map((item) => ({
        icon: item.weather[0].icon,
        min: item.main.temp_min,
        max: item.main.temp_max,
        description: item.weather[0].main,
      }))
    );
  }, [cityToShow]);

  return (
    <section className="forecast">
      {dataFromCity.map((item, index) => {
        return (
          <ForecastCard
            key={index}
            icon={item.icon}
            min={item.min}
            max={item.max}
            description={item.description}
          />
        );
      })}
    </section>
  );
};
