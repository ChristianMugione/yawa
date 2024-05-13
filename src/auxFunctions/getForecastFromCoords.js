/**
 * This function retrieve forecast data using coords lat and lon.
 */

export const getForecastFromCoords = async (lat, lon, api_key) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    );
    return res;
  } catch (error) {
    console.error(error);
    return { message: error };
  }
};
