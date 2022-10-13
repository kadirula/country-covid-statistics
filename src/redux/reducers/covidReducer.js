import { createSlice } from '@reduxjs/toolkit'

export const covidReducer = createSlice({
    name: 'covid',
    initialState: {
        data: undefined
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    }
});

export const { setData } = covidReducer.actions;

export default covidReducer.reducer;