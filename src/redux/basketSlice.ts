import { createSlice } from "@reduxjs/toolkit";
import { stateType } from "../types/typeBasket";
import { RootState } from "./store";

const stateItem: stateType = {
    items: [],
    invoice: {
        totalPrice: 0
    }
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: stateItem,
    reducers: {
        addItem: (state, action) => {

            state.invoice.totalPrice = state.invoice.totalPrice + action.payload.price

            const item = action.payload
            const alreadyExist = state.items.some(_item => item.id === _item.id)

            if (alreadyExist) {
                state.items = state.items.map(_item => {
                    if (_item.id === item.id) {
                        return { ..._item, quantity: _item.quantity + 1 }
                    }
                    return _item
                })

            } else {
                state.items.push({ ...item, quantity: 1 })
            }
        },
        removeItem: (state, action) => {

            const item = action.payload

            state.invoice.totalPrice = state.invoice.totalPrice - item.price

            const checkQuantity = item.quantity === 1 
            
            if(checkQuantity){
                state.items = state.items.filter(_item => _item.id !== _item.id)
            }else{
                state.items = state.items.map(_item =>{
                    if(item.id === _item.id){
                        return {..._item , quantity : _item.quantity -1}
                    }
                    return _item
                })
            }
        }
    }
})

const { actions, reducer }  = basketSlice

export const { addItem, removeItem } = actions

export const basketState = (state:RootState) => state.basket

export default reducer
