import { saveToLS, loadFromLS } from "./tuArchivo";

describe("LocalStorage functions", () => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key],
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
      removeItem: (key) => {
        delete store[key];
      },
    };
  })();

  // Before each test, clear localStorage
  beforeEach(() => {
    localStorageMock.clear();
  });

  test("saveToLS should save data to localStorage", () => {
    const info = { city: "New York", temperature: 25 };
    saveToLS(info, localStorageMock);
    expect(localStorageMock.getItem("weather-info")).toEqual(
      JSON.stringify(info)
    );
  });

  test("loadFromLS should load data from localStorage", () => {
    const info = { city: "New York", temperature: 25 };
    localStorageMock.setItem("weather-info", JSON.stringify(info));
    expect(loadFromLS(localStorageMock)).toEqual(info);
  });

  test("loadFromLS should return null if no data in localStorage", () => {
    expect(loadFromLS(localStorageMock)).toBeNull();
  });
});
