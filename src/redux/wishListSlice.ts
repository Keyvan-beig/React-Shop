import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

interface typeWishList {

    itemsId: string[]
}

interface typeAction {
    type: string;
    payload: string;
}

const WishState: typeWishList = {
    itemsId: []
}

const wishListSlice = createSlice({
    name: "wishList",
    initialState: WishState,
    reducers: {
        addWish: (state : typeWishList, action:typeAction) => {

            state.itemsId.push(action.payload)
        },
        removeWish: (state : typeWishList, action:typeAction) => {

            state.itemsId = state.itemsId.filter(_item => _item !== action.payload)
        }
    }
})

const { actions, reducer } = wishListSlice

export const { addWish, removeWish } = actions
export const wishState = (state: RootState) => state.wishList
export default reducer

