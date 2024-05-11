import { useDispatch, useSelector } from "react-redux";
import { addSelectedCity, resetCitiesToSelect } from "../store/appSlices";

export const CitiesToSelect = () => {
  const citiesToSelect = useSelector((state) => state.appStatus.citiesToSelect);

  const dispatch = useDispatch();

  console.log(citiesToSelect);
  return (
    <>
      {citiesToSelect && (
        <ul className="cities">
          {citiesToSelect.map((city, index) => {
            return (
              <li
                key={index}
                className="each-city"
                onClick={() => {
                  //dispatch selectedcity
                  dispatch(addSelectedCity({ lat: city.lat, lon: city.lon }));
                  dispatch(resetCitiesToSelect());
                }}
              >
                {city.name}, {city.country}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
