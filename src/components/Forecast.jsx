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
  let counter = 0;

  useEffect(() => {
    setDataFromCity(
      cityToShow.forecast.list.slice(0, 3).map((item) => ({
        icon: item.weather[0].icon,
        min: item.main.temp_min,
        max: item.main.temp_max,
        description: item.weather[0].main,
      }))
    );
    console.log("cityToShow: ", cityToShow);
    console.log("dataFromCity: ", dataFromCity);
  }, [cityToShow]);

  return (
    <>
      <section className="forecast">
        {dataFromCity.map((item) => {
          counter++;
          return (
            <ForecastCard
              key={counter}
              icon={item.icon}
              min={item.min}
              max={item.max}
              description={item.description}
            />
          );
        })}
      </section>
    </>
  );
};
