import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityList } from "../auxFunctions/getCityList";
import { addCitiesToSelect } from "../store/appSlices";

export const SearchForm = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const fetchCityList = async (cityTyped) => {
      const cityList = await getCityList(
        cityTyped,
        "72f48041605a4c0b54500dc4f2c94798"
      );
      const cityListJson = await cityList.json();
      dispatch(addCitiesToSelect(cityListJson));
    };
    fetchCityList(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
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
  );
};
