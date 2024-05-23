// This function take a date in seconds and return the day of the month

export const calcDayNumber = (dayInSeconds) => {
  const date = new Date(dayInSeconds * 1000);
  const dayNumber = date.getDate();
  return dayNumber;
};
