import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
};

const initialWindowScreen = {
  value: window.innerWidth,
};

export const selectedPageSlice = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    setSelectedPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const setWindowChange = createSlice({
  name: "windowChange",
  initialState: initialWindowScreen,
  reducers: {
    setWindowWidth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedPage } = selectedPageSlice.actions;
export const { setWindowWidth } = setWindowChange.actions;

export const selectedPageReducer = selectedPageSlice.reducer;
export const windowChangeReducer = setWindowChange.reducer;
