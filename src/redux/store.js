import { configureStore } from '@reduxjs/toolkit'
import covidReducer from './reducers/covidReducer'
import tooltipReducer from './reducers/tooltipReducer'

export default configureStore({
    reducer: {
        covid: covidReducer,
        tooltip: tooltipReducer
    },
})