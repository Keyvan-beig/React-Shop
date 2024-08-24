import { createSlice } from "@reduxjs/toolkit";
import getStorage from "../utils/storage/getStorage";
import setStorage from "../utils/storage/setStorage";

const storage = getStorage('wishList')

interface typeWishList {
    itemsId: string[]
}

interface typeAction {
    type: string;
    payload: string;
}

interface RootState {
    wishList: {
        itemsId: string[];
    };
}

const WishState: typeWishList = {
    itemsId: storage ? storage.itemsId : []
}

const wishListSlice = createSlice({
    name: "wishList",
    initialState: WishState,
    reducers: {
        addWish: (state : typeWishList, action:typeAction) => {

            state.itemsId.push(action.payload)

            setStorage("wishList",{...state , itemsId : state.itemsId})
        },
        removeWish: (state : typeWishList, action:typeAction) => {

            state.itemsId = state.itemsId.filter(_item => _item !== action.payload)

            setStorage("wishList",{...state , itemsId : state.itemsId})
        }
    }
})

const { actions, reducer } = wishListSlice

export const { addWish, removeWish } = actions
export const wishState = (state : RootState) => state.wishList
export default reducer

