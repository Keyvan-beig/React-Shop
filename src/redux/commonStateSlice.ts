import { createSlice } from "@reduxjs/toolkit";

interface stateType {
    commonSlice: {
        loading: boolean,
        error: string,
        alert: {
            alertShow: boolean,
            alertType: 'error' | 'success' | 'info' | 'warning',
        }

    }
}
const states = {
    loading: false,
    error: '',
    alert: {
        alertShow: false,
        alertType: 'success',
    }
}

const commonStateSlice = createSlice({
    name: "commonSlice",
    initialState: states,
    reducers: {
        loadingSet: (state, action) => {
            state.loading = action.payload
        },
        errorSet: (state, action) => {
            state.error = action.payload
        },
        alerShowSet: (state, action) => {
            state.alert.alertShow = action.payload
        },
        alertTypeSet: (state, action) => {
            state.alert.alertType = action.payload
        }
    }
})

const { actions, reducer } = commonStateSlice

export const { alerShowSet, alertTypeSet, errorSet, loadingSet } = actions
export const commonState = (state: stateType) => state.commonSlice
export default reducer