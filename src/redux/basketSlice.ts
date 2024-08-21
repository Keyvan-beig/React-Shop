import { createSlice } from "@reduxjs/toolkit";
import { stateType, typeProductBasket } from "../types/typeBasket";
import { RootState } from "./store";

const stateItem: stateType = {
    items: [],
    invoice: {
        totalPrice: 0
    }
}

interface typeAction {
    type: string;
    payload: typeProductBasket;
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

            }
        },
        removeItem: (state: stateType, action: typeAction) => {

            const item = action.payload

            state.invoice.totalPrice = state.invoice.totalPrice - item.price * item.count

            const alreadyExist = state.items.some(_item => item.id === _item.id)

            if (alreadyExist) {

                state.items = state.items.filter(_item => _item.id !== item.id)
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
        }
    }
})

const { actions, reducer } = basketSlice

export const { addItem, removeItem, updateBasket } = actions

export const basketState = (state: RootState) => state.basket

export default reducer
