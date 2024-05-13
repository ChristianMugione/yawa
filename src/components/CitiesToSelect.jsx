/**
 * This component is responsible for display a list of cities available for selection.
 * It retrieves the list of cities from the Redux store and displays them in a formatted list.
 * Upon selecting a city from the list, it dispatches actions to add the selected city's coordinates
 * to the store and reset the list of cities available for selection.
 * This component doesn't use useState because it's only called when there's a list of cities in the store.
 */

import { useDispatch, useSelector } from "react-redux";
import { addSelectedCity, resetCitiesToSelect } from "../store/appSlices";

export const CitiesToSelect = () => {
  //Take the list of cities from de Redux store.
  const citiesToSelect = useSelector((state) => state.appStatus.citiesToSelect);

  const dispatch = useDispatch();

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
