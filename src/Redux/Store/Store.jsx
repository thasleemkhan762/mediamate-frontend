import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Reducer/UserSlice";
import PostSlice from "../Reducer/PostSlice";
import ChatSlice from "../Reducer/ChatSlice";
import PaymentSlice from "../Reducer/PaymentSlice";

const store = configureStore({
    reducer: {
        data:UserSlice,
        post:PostSlice,
        chat:ChatSlice,
        payments:PaymentSlice
    }
})
export default store;