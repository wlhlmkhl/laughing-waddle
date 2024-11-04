import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice"; // Använd din reducer
import settingsReducer from "./settingsSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    settings: settingsReducer,
  },
});

export default store;
