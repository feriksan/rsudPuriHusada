import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {},
}

export const bpjsData = createSlice({
    name: 'bpjs',
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
export const { add, remove} = bpjsData.actions
export default bpjsData.reducer;