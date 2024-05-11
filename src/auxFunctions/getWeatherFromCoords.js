export const getWeatherFromCoords = async (lat, lon, api_key) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    );
    return res;
  } catch (error) {
    console.error(error);
    return { message: error };
  }
};
