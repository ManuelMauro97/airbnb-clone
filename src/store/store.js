import { configureStore } from "@reduxjs/toolkit";
import { botonesSlice } from "./airbnb/botonesSlice";
import { authSlice } from "./auth/authSlice";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        airbnb: botonesSlice.reducer,
    },
});
