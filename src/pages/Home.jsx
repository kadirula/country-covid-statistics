import React from 'react'
import { useSelector } from 'react-redux'
import ReactTooltip from "react-tooltip";

import MapChart from '../components/MapChart';


const Home = () => {
   
    const { tooltipContent } = useSelector(state => state.tooltip)

    return (
        <React.Fragment>
            <MapChart />
            <ReactTooltip>{tooltipContent}</ReactTooltip>
        </React.Fragment>
    )
}

export default Home