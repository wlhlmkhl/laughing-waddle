import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  themes: [
    {
      id: 1,
      active: true,
      name: "Pink",
      headerStyle: "bg-pink-500 text-white",
      buttonStyle: "bg-pink-400 text-white hover:bg-pink-600",
    },
    {
      id: 2,
      active: false,
      name: "Mint",
      headerStyle: "bg-teal-500 text-white",
      buttonStyle: "bg-teal-400 text-white hover:bg-teal-600",
    },
    {
      id: 3,
      active: false,
      name: "Lavender",
      headerStyle: "bg-purple-500 text-white",
      buttonStyle: "bg-purple-400 text-white hover:bg-purple-600",
    },
  ],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    selectTheme: (state, action) => {
      const themeId = action.payload; // expects number
      state.themes = state.themes.map((theme) =>
        theme.id === themeId
          ? { ...theme, active: true }
          : { ...theme, active: false }
      );
    },
  },
});
export const { selectTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
