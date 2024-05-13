export const saveToLS = (info) => {
  // Function for stringify info and persist it on browser local storage
  const infoStringified = JSON.stringify(info);
  window.localStorage.setItem("weather-info", infoStringified);
};

export const loadFromLS = () => {
  // Function for retrieve info from browser local storage and retrieve it parsed
  const infoStringified = window.localStorage.getItem("weather-info");
  return JSON.parse(infoStringified);
};
