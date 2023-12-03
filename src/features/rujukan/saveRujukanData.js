import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {},
}

export const rujukanData = createSlice({
    name: 'rujukan',
    initialState,
    reducers: {
        addRujukan:(state, action) => {
            state.value = action.payload
        },
        removeRujukan:(state) => {
            state.value = {}
        }
    }
})
export const { addRujukan, removeRujukan} = rujukanData.actions
export default rujukanData.reducer;