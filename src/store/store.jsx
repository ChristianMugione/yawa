import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlices";

export default configureStore({
  reducer: {
    appStatus: appSlice.reducer,
  },
});
