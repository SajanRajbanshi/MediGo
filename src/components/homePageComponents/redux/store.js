import { configureStore } from "@reduxjs/toolkit";
import searchCardDataReducer from "./Slices/SearchSlice";
import {selectedPageReducer,windowChangeReducer} from "./Slices/SelectedPageSlice";

const store = configureStore({
    reducer: {
        cardData: searchCardDataReducer,
        selectedPage: selectedPageReducer,
        windowChange: windowChangeReducer,
    }
})

export default store;