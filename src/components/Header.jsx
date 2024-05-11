import { useEffect, useState } from "react";
import { getCityList } from "../auxFunctions/getCityList";
import { useDispatch } from "react-redux";
import { addCitiesToSelect, addSelectedCity } from "../store/appSlices";
import { CitiesToSelect } from "./CitiesToSelect";
import "../assets/HeaderStyles.css";
import { loadFromLS } from "../auxFunctions/localStorageFncs";

export const Header = () => {
  const [input, setInput] = useState("");

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

  const handleForm = (e) => {
    e.preventDefault();
    const fetchCityList = async (cityTyped) => {
      const cityList = await getCityList(
        cityTyped,
        "72f48041605a4c0b54500dc4f2c94798"
      );
      const cityListJson = await cityList.json();
      dispatch(addCitiesToSelect(cityListJson));
      console.log(cityListJson);
    };
    fetchCityList(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <>
      <header className="header">
        <h1>
          Yet Another
          <br />
          Weather App
        </h1>
        <form
          action="POST"
          className="search-form"
          id="search-form"
          onSubmit={handleForm}
        >
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            className="input-form"
            value={input}
            onChange={handleChange}
          />
          <button className="search-button">Search</button>
        </form>
        <CitiesToSelect />
      </header>
    </>
  );
};
