export const calcThreeDaysForecast = (list) => {
  //extract unique number of days

  const numberOfToday = calcDayNumber(Date.now() / 1000);

  //Create array with only number of days
  const dayNumbers = list.map((item) => {
    return calcDayNumber(item.dt);
  });

  //Delete day numbers duplicates
  let i = 1;
  let flag = 0;
  while (flag === 0) {
    if (dayNumbers[i] === dayNumbers[i - 1]) {
      dayNumbers.splice(i, 1);
    } else {
      i++;
    }

    if (!dayNumbers[i]) {
      flag = 1;
    }
  }

  //delete first if is equal to number of today (i need the forecast from tomorrow)
  if (dayNumbers[0] === numberOfToday) {
    dayNumbers.splice(0, 1);
  }
  //keep three first numbers and discard the rest
  const firstThreeDayNumbers = dayNumbers.splice(0, 3);

  //make an array for each unique number of day threeDays = [ dayNumber: 3, weekDay: 2,
  //                                                          dayForecast: [{
  //                                                            temp: 9, etc... }, ...], "4": { temp: 9, etc... }]
  const threeDays = firstThreeDayNumbers.map((item) => {
    let oneDay = { dayNumber: item, weekDay: null };
    const forecastOfDay = list.map((itemFromList) => {
      if (calcDayNumber(itemFromList.dt) === item) {
        if (!oneDay.weekDay) {
          const weekDay = calcWeekDay(itemFromList.dt);
          oneDay = { ...oneDay, weekDay: weekDay, dayForecast: [] };
        }
        oneDay.dayForecast.push({
          icon: itemFromList.weather[0].icon.slice(0, 2),
          description: itemFromList.weather[0].main,
          temp: itemFromList.main.temp,
        });
      }
    });
    return oneDay;
  });

  //process first three arrays (temp min, max, average wind direction and speed, and general weather)
  const threeDaysForecast = threeDays.map((eachDay) => {
    let dayForecastIcon = [];
    let dayForecastDesc = [];
    let dayForecastInfo = {
      min: eachDay.dayForecast[0].temp,
      max: eachDay.dayForecast[0].temp,
    };

    eachDay.dayForecast.map((dayForecast) => {
      dayForecastIcon.push(dayForecast.icon);
      dayForecastDesc.push(dayForecast.description);
      dayForecastInfo = {
        ...dayForecastInfo,
        min:
          dayForecast.temp < dayForecastInfo.min
            ? dayForecast.temp
            : dayForecastInfo.min,
        max:
          dayForecast.temp > dayForecastInfo.max
            ? dayForecast.temp
            : dayForecastInfo.max,
      };
    });

    const mostFrequentIcon = findMostFrequentElement(dayForecastIcon);
    const mostFrequentDesc = findMostFrequentElement(dayForecastDesc);

    dayForecastInfo = {
      ...dayForecastInfo,
      icon: mostFrequentIcon,
      description: mostFrequentDesc,
    };
    const res = { ...eachDay, dayForecast: dayForecastInfo };

    return res;
  });

  return threeDaysForecast;
};

// This function take a date in seconds and return the day of the month
function calcDayNumber(dayInSeconds) {
  const date = new Date(dayInSeconds * 1000);
  const dayNumber = date.getDate();
  return dayNumber;
}

function calcWeekDay(dayInSeconds) {
  const date = new Date(dayInSeconds * 1000);
  const weekDay = date.getDay();
  return weekDay;
}

function findMostFrequentElement(array) {
  array.sort();
  let counter = 0;
  let max = { element: array[0], num: 1 };
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      counter++;
    } else {
      if (counter > max.num) {
        max = { element: array[i - 1], num: counter };
      }
      counter = 0;
    }
  }
  return max.element;
}
