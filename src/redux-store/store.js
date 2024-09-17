import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";

const store = configureStore({
    reducer: {
        formReducer: formSlice.reducer
    }
})

export default store