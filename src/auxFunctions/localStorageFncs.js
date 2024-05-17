export const saveToLS = (info, localStorage = window.localStorage) => {
  // Function for stringify info and persist it on browser local storage
  const infoStringified = JSON.stringify(info);
  localStorage.setItem("weather-info", infoStringified);
};

export const loadFromLS = (localStorage = window.localStorage) => {
  // Function for retrieve info from browser local storage and retrieve it parsed
  const infoStringified = localStorage.getItem("weather-info");
  if (!infoStringified) {
    return null;
  }
  return JSON.parse(infoStringified);
};
