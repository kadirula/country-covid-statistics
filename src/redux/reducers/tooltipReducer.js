import { createSlice } from '@reduxjs/toolkit'

export const tooltipReducer = createSlice({
    name: 'tooltip',
    initialState: {
        tooltipContent: ""
    },
    reducers: {
        setTooltipContent: (state, action) => {
            state.tooltipContent = action.payload
        }
    }
});

export const { setTooltipContent } = tooltipReducer.actions;

export default tooltipReducer.reducer;