// SearchSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

export const searchSlice = createSlice({
    name: "cardData",
    initialState,
    reducers: {
        setSearchCardData: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setSearchCardData } = searchSlice.actions;
export default searchSlice.reducer;
