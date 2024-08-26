import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketSlice"
import wishList from "./wishListSlice"
import commonSlice from "./commonStateSlice"

export const store = configureStore({
    reducer: {
        basket,
        wishList,
        commonSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
