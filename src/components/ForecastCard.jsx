import { oneDecimal } from "../auxFunctions/oneDecimal";
import { ShowIcon } from "./ShowIcon";

export const ForecastCard = ({
  weekDay,
  dayNumber,
  icon,
  min,
  max,
  description,
}) => {
  const weekDayName = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  return (
    <div className="forecast-card">
      <h5>
        {weekDayName[weekDay]} {dayNumber}
      </h5>
      <div className="forecast-card-icon">
        <ShowIcon iconCode={icon + "d"} />
      </div>
      <div className="min-max">
        <p>
          {oneDecimal(min)}º/{oneDecimal(max)}º
        </p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};
