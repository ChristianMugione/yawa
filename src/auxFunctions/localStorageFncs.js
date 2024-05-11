export const saveToLS = (info) => {
  const infoStringified = JSON.stringify(info);
  window.localStorage.setItem("weather-info", infoStringified);
};

export const loadFromLS = () => {
  const infoStringified = window.localStorage.getItem("weather-info");
  return JSON.parse(infoStringified);
};
