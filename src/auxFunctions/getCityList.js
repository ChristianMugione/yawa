/*
 * This function retrieve a list of cities from OpenWeatherMap based on a search key
 */

export const getCityList = async (searchKey, api_key) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchKey}&limit=10&appid=${api_key}`
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};
