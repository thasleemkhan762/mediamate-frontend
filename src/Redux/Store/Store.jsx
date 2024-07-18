import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/UserSlice";

const store = configureStore({
    reducer: {
        user:UserSlice
    }
})
export default store;