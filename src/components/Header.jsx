import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSelectedCity } from "../store/appSlices";
import { CitiesToSelect } from "./CitiesToSelect";
import "../assets/HeaderStyles.css";
import { loadFromLS } from "../auxFunctions/localStorageFncs";
import { SearchForm } from "./SearchForm";

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const weatherDataJson = loadFromLS();
    if (weatherDataJson) {
      dispatch(
        addSelectedCity({
          lat: weatherDataJson.coord.lat,
          lon: weatherDataJson.coord.lon,
        })
      );
    }
  }, []);

  return (
    <header className="header">
      <h1>
        Yet Another
        <br />
        Weather App
      </h1>
      <SearchForm />
      <CitiesToSelect />
    </header>
  );
};
