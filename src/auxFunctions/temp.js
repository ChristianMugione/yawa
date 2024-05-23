import { calcThreeDaysForecast } from "./calcThreeDaysForecast.js";
import fs from "fs/promises";

const list = getData();

const dataList = calcThreeDaysForecast(list);

// console.log(JSON.stringify(dataList));
console.log(dataList);

function getData() {
  const listOfDays = [
    {
      dt: 1716325200,
      main: {
        temp: 27.66,
        feels_like: 30.26,
        temp_min: 27.66,
        temp_max: 27.72,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1014,
        humidity: 72,
        temp_kf: -0.06,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.86,
        deg: 188,
        gust: 4.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-21 21:00:00",
    },
    {
      dt: 1716336000,
      main: {
        temp: 7.47,
        feels_like: 30.11,
        temp_min: 27.39,
        temp_max: 27.47,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 74,
        temp_kf: 0.08,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.71,
        deg: 189,
        gust: 5.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-22 00:00:00",
    },
    {
      dt: 1716346800,
      main: {
        temp: 7.06,
        feels_like: 29.4,
        temp_min: 27.06,
        temp_max: 27.06,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.91,
        deg: 199,
        gust: 4.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-22 03:00:00",
    },
    {
      dt: 1716357600,
      main: {
        temp: 27.24,
        feels_like: 29.66,
        temp_min: 27.24,
        temp_max: 27.24,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.86,
        deg: 204,
        gust: 3.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-22 06:00:00",
    },
    {
      dt: 1716368400,
      main: {
        temp: 27.24,
        feels_like: 29.76,
        temp_min: 27.24,
        temp_max: 27.24,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.82,
        deg: 182,
        gust: 4.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-22 09:00:00",
    },
    {
      dt: 1716379200,
      main: {
        temp: 27.17,
        feels_like: 29.82,
        temp_min: 27.17,
        temp_max: 27.17,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.11,
        deg: 191,
        gust: 4.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-22 12:00:00",
    },
    {
      dt: 1716390000,
      main: {
        temp: 27.31,
        feels_like: 29.9,
        temp_min: 27.31,
        temp_max: 27.31,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.01,
        deg: 196,
        gust: 5.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-22 15:00:00",
    },
    {
      dt: 1716400800,
      main: {
        temp: 27.39,
        feels_like: 30.17,
        temp_min: 27.39,
        temp_max: 27.39,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.77,
        deg: 193,
        gust: 5.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-22 18:00:00",
    },
    {
      dt: 1716411600,
      main: {
        temp: 27.37,
        feels_like: 30.13,
        temp_min: 27.37,
        temp_max: 27.37,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.97,
        deg: 184,
        gust: 5.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-22 21:00:00",
    },
    {
      dt: 1716422400,
      main: {
        temp: 27.35,
        feels_like: 30.09,
        temp_min: 27.35,
        temp_max: 27.35,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.08,
        deg: 177,
        gust: 6.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-23 00:00:00",
    },
    {
      dt: 1716433200,
      main: {
        temp: 27.69,
        feels_like: 30.32,
        temp_min: 27.69,
        temp_max: 27.69,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 5.33,
        deg: 190,
        gust: 5.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-23 03:00:00",
    },
    {
      dt: 1716444000,
      main: {
        temp: 27.65,
        feels_like: 30.24,
        temp_min: 27.65,
        temp_max: 27.65,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 5.2,
        deg: 186,
        gust: 5.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-23 06:00:00",
    },
    {
      dt: 1716454800,
      main: {
        temp: 27.55,
        feels_like: 30.51,
        temp_min: 27.55,
        temp_max: 27.55,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 6.38,
        deg: 174,
        gust: 6.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-23 09:00:00",
    },
    {
      dt: 1716465600,
      main: {
        temp: 27.4,
        feels_like: 30.19,
        temp_min: 27.4,
        temp_max: 27.4,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 5.52,
        deg: 169,
        gust: 5.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-23 12:00:00",
    },
    {
      dt: 1716476400,
      main: {
        temp: 27.58,
        feels_like: 30.45,
        temp_min: 27.58,
        temp_max: 27.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 4.11,
        deg: 175,
        gust: 4.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-23 15:00:00",
    },
    {
      dt: 1716487200,
      main: {
        temp: 27.82,
        feels_like: 30.96,
        temp_min: 27.82,
        temp_max: 27.82,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 4.31,
        deg: 171,
        gust: 4.6,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-23 18:00:00",
    },
    {
      dt: 1716498000,
      main: {
        temp: 27.99,
        feels_like: 31.48,
        temp_min: 27.99,
        temp_max: 27.99,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 5.65,
        deg: 177,
        gust: 5.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-23 21:00:00",
    },
    {
      dt: 1716508800,
      main: {
        temp: 27.63,
        feels_like: 31.06,
        temp_min: 27.63,
        temp_max: 27.63,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 7.09,
        deg: 192,
        gust: 7.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-24 00:00:00",
    },
    {
      dt: 1716519600,
      main: {
        temp: 27.35,
        feels_like: 30.53,
        temp_min: 27.35,
        temp_max: 27.35,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.03,
        deg: 197,
        gust: 5.9,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-24 03:00:00",
    },
    {
      dt: 1716530400,
      main: {
        temp: 27.38,
        feels_like: 30.26,
        temp_min: 27.38,
        temp_max: 27.38,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 4.65,
        deg: 180,
        gust: 4.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-24 06:00:00",
    },
    {
      dt: 1716541200,
      main: {
        temp: 27.49,
        feels_like: 30.5,
        temp_min: 27.49,
        temp_max: 27.49,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 4.93,
        deg: 166,
        gust: 4.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-24 09:00:00",
    },
    {
      dt: 1716552000,
      main: {
        temp: 27.29,
        feels_like: 30.18,
        temp_min: 27.29,
        temp_max: 27.29,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 5.56,
        deg: 170,
        gust: 5.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-24 12:00:00",
    },
    {
      dt: 1716562800,
      main: {
        temp: 27.18,
        feels_like: 29.84,
        temp_min: 27.18,
        temp_max: 27.18,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 5.44,
        deg: 172,
        gust: 5.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-24 15:00:00",
    },
    {
      dt: 1716573600,
      main: {
        temp: 27.25,
        feels_like: 29.78,
        temp_min: 27.25,
        temp_max: 27.25,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 5.32,
        deg: 166,
        gust: 5.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-24 18:00:00",
    },
    {
      dt: 1716584400,
      main: {
        temp: 27.39,
        feels_like: 30.06,
        temp_min: 27.39,
        temp_max: 27.39,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.63,
        deg: 158,
        gust: 5.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-24 21:00:00",
    },
    {
      dt: 1716595200,
      main: {
        temp: 27.15,
        feels_like: 29.67,
        temp_min: 27.15,
        temp_max: 27.15,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 5.82,
        deg: 161,
        gust: 5.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-25 00:00:00",
    },
    {
      dt: 1716606000,
      main: {
        temp: 27.16,
        feels_like: 29.41,
        temp_min: 27.16,
        temp_max: 27.16,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.1,
        deg: 177,
        gust: 6.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-25 03:00:00",
    },
    {
      dt: 1716616800,
      main: {
        temp: 27.4,
        feels_like: 29.65,
        temp_min: 27.4,
        temp_max: 27.4,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.65,
        deg: 167,
        gust: 5.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-25 06:00:00",
    },
    {
      dt: 1716627600,
      main: {
        temp: 27.19,
        feels_like: 29.56,
        temp_min: 27.19,
        temp_max: 27.19,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 5.27,
        deg: 164,
        gust: 5.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-25 09:00:00",
    },
    {
      dt: 1716638400,
      main: {
        temp: 27.05,
        feels_like: 29.29,
        temp_min: 27.05,
        temp_max: 27.05,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 5.01,
        deg: 167,
        gust: 4.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-25 12:00:00",
    },
    {
      dt: 1716649200,
      main: {
        temp: 27.05,
        feels_like: 29.29,
        temp_min: 27.05,
        temp_max: 27.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 4.94,
        deg: 173,
        gust: 4.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-25 15:00:00",
    },
    {
      dt: 1716660000,
      main: {
        temp: 27.15,
        feels_like: 29.29,
        temp_min: 27.15,
        temp_max: 27.15,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 5.49,
        deg: 162,
        gust: 5.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-25 18:00:00",
    },
    {
      dt: 1716670800,
      main: {
        temp: 26.98,
        feels_like: 29.16,
        temp_min: 26.98,
        temp_max: 26.98,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 5.65,
        deg: 157,
        gust: 5.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-25 21:00:00",
    },
    {
      dt: 1716681600,
      main: {
        temp: 26.82,
        feels_like: 28.78,
        temp_min: 26.82,
        temp_max: 26.82,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 6.07,
        deg: 163,
        gust: 6.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-26 00:00:00",
    },
    {
      dt: 1716692400,
      main: {
        temp: 26.68,
        feels_like: 28.47,
        temp_min: 26.68,
        temp_max: 26.68,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 6.96,
        deg: 170,
        gust: 7.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-05-26 03:00:00",
    },
    {
      dt: 1716703200,
      main: {
        temp: 26.93,
        feels_like: 28.74,
        temp_min: 26.93,
        temp_max: 26.93,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 7.45,
        deg: 167,
        gust: 7.73,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-26 06:00:00",
    },
    {
      dt: 1716714000,
      main: {
        temp: 26.99,
        feels_like: 28.84,
        temp_min: 26.99,
        temp_max: 26.99,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 6.99,
        deg: 158,
        gust: 7.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-26 09:00:00",
    },
    {
      dt: 1716724800,
      main: {
        temp: 26.81,
        feels_like: 28.54,
        temp_min: 26.81,
        temp_max: 26.81,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 4.84,
        deg: 158,
        gust: 4.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-26 12:00:00",
    },
    {
      dt: 1716735600,
      main: {
        temp: 27.05,
        feels_like: 28.69,
        temp_min: 27.05,
        temp_max: 27.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 4.75,
        deg: 162,
        gust: 4.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-26 15:00:00",
    },
    {
      dt: 1716746400,
      main: {
        temp: 26.75,
        feels_like: 28.51,
        temp_min: 26.75,
        temp_max: 26.75,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 4.98,
        deg: 164,
        gust: 5.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-05-26 18:00:00",
    },
  ];
  return listOfDays;
}

// const getList = async () => {
//   try {
//     const list = await fs.readFile("./state.json", "utf8");
//     // console.log(list);
//     return list;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const hola = getList();
// console.log(hola);

// calcThreeDaysForecast();
