import { createSlice } from "@reduxjs/toolkit";
import { stateType, typeProductBasket } from "../types/typeBasket";
import { RootState } from "./store";
import getStorage from "../utils/storage/getStorage";
import setStorage from "../utils/storage/setStorage";

interface typeAction {
    type: string;
    payload: typeProductBasket;
}

const storage = getStorage('basket')

const stateItem: stateType = {
    items: storage ? storage.items : [],
    invoice: {
        totalPrice: storage ? storage.invoice.totalPrice : 0
    }
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: stateItem,
    reducers: {
        addItem: (state: stateType, action: typeAction) => {

            const item = action.payload

            state.invoice.totalPrice = state.invoice.totalPrice + item.price * item.count

            const alreadyExist = state.items.some(_item => item.id === _item.id)

            if (!alreadyExist) {

                state.items.push(item)

                setStorage("basket",{...state , items : state.items})

            }
        },
        removeItem: (state: stateType, action: typeAction) => {

            const item = action.payload

            state.invoice.totalPrice = state.invoice.totalPrice - item.price * item.count

            const alreadyExist = state.items.some(_item => item.id === _item.id)

            if (alreadyExist) {

                state.items = state.items.filter(_item => _item.id !== item.id)

                setStorage("basket",{...state , items : state.items})
            }
        },
        updateBasket: (state: stateType, action: typeAction) => {

            const item = action.payload

            state.items = state.items.map(_item => {
                if (_item.id === item.id) {

                    state.invoice.totalPrice -= _item.price * _item.count
                    state.invoice.totalPrice += item.price * item.count

                    return item
                }

                return _item
            })

            setStorage("basket",{...state , items : state.items})
        }
    }
})

const { actions, reducer } = basketSlice

export const { addItem, removeItem, updateBasket } = actions
export const basketState = (state: RootState) => state.basket
export default reducer
