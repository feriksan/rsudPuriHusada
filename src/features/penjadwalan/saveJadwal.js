import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {},
}

export const jadwalData = createSlice({
    name: 'jadwal',
    initialState,
    reducers: {
        add:(state, action) => {
            state.value = action.payload
        },
        remove:(state) => {
            state.value = {}
        }
    }
})
export const { add, remove} = jadwalData.actions
export default jadwalData.reducer;