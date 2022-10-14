import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const Store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});
