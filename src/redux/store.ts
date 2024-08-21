import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketSlice"
import wishList from "./wishListSlice"

export const store = configureStore({
    reducer: {
        basket,
        wishList
    }
})
export type RootState = ReturnType<typeof store.getState>
