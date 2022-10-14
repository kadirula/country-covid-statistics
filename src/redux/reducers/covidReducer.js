import { createSlice } from '@reduxjs/toolkit'

export const covidReducer = createSlice({
    name: 'covid',
    initialState: {
        totalStatistic: undefined,
        regionStatistic: undefined

    },
    reducers: {
        setCountryTotalStatistic: (state, action) => {
            state.totalStatistic = action.payload
        },
        setRegionStatistic: (state, action) => {
            state.regionStatistic = action.payload
        }
    }
});

export const { setCountryTotalStatistic, setRegionStatistic } = covidReducer.actions;

export default covidReducer.reducer;