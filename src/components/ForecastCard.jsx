import { oneDecimal } from "../auxFunctions/oneDecimal";

export const ForecastCard = ({ icon, min, max, description }) => {
  const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  return (
    <div className="forecast-card">
      <img src={imgUrl} alt="Weather conditions forecast" />
      <div className="min-max">
        <p>
          {oneDecimal(min)}/{oneDecimal(max)}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
