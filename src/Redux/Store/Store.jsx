import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/UserSlice";
import PostSlice from "../Reducer/PostSlice";

const store = configureStore({
    reducer: {
        data:UserSlice,
        post:PostSlice
    }
})
export default store;