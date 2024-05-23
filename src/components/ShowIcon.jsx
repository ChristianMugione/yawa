import {
  BsBrightnessAltHighFill,
  BsBrightnessHighFill,
  BsCloud,
  BsCloudDrizzle,
  BsCloudHaze,
  BsCloudLightning,
  BsCloudMoon,
  BsCloudRain,
  BsClouds,
  BsCloudSun,
  BsMoonFill,
  BsSnow,
} from "react-icons/bs";

export const ShowIcon = ({ iconCode }) => {
  const icon = {
    xxx: <BsCloudHaze />,
    "01d": <BsBrightnessHighFill />,
    "01n": <BsMoonFill />,
    "02d": <BsCloudSun />,
    "02n": <BsCloudMoon />,
    "03d": <BsCloud />,
    "03n": <BsCloud />,
    "04d": <BsClouds />,
    "04n": <BsClouds />,
    "09d": <BsCloudDrizzle />,
    "09n": <BsCloudDrizzle />,
    "10d": <BsCloudRain />,
    "10n": <BsCloudRain />,
    "11d": <BsCloudLightning />,
    "11n": <BsCloudLightning />,
    "13d": <BsSnow />,
    "13n": <BsSnow />,
    "50d": <BsCloudHaze />,
    "50n": <BsCloudHaze />,
  };
  return icon[iconCode];
};
