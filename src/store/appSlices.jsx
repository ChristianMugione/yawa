import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appStatus",
  initialState: {
    citiesToSelect: null,
    selectedCity: {
      lat: null,
      lon: null,
    },
    cityToShow: null,
  },
  reducers: {
    addCitiesToSelect: (state, action) => {
      state.citiesToSelect = action.payload;
    },
    addSelectedCity: (state, action) => {
      // const { lat, lon } = action.payload
      state.selectedCity = action.payload;
    },
    resetCitiesToSelect: (state) => {
      state.citiesToSelect = null;
    },
    addCityToShow: (state, action) => {
      state.cityToShow = action.payload;
    },
    emptyCityToShow: (state) => {
      state.cityToShow = null;
    },
  },
});

export const {
  addCitiesToSelect,
  addSelectedCity,
  resetCitiesToSelect,
  addCityToShow,
  emptyCityToShow,
} = appSlice.actions;
