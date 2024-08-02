import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/UserSlice";

const store = configureStore({
    reducer: {
        data:UserSlice
    }
})
export default store;