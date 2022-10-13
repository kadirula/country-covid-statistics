import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setTooltipContent } from "../redux/reducers/tooltipReducer";
import features from '../api/features.json'

const MapChart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div data-tip="">
            <ComposableMap>
                <Geographies geography={features}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    dispatch(setTooltipContent(`${geo.properties.name}`))
                                }}
                                onMouseLeave={() => {
                                    dispatch(setTooltipContent(""))
                                }}
                                onClick={() => navigate(`/country/${geo.properties.name}`)}
                                style={{
                                    default: {
                                        fill: "#808080",
                                        outline: "none",
                                        stroke: '#fff'
                                    },
                                    hover: {
                                        fill: "#ea580c",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#ea580c",
                                        outline: "none"
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>

    )
}

export default MapChart