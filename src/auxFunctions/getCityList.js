export const getCityList = async (searchKey, api_key) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchKey}&limit=10&appid=${api_key}`
    );
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
