import {ACTION_TYPES, CONTENT_STATES} from "../constants";

export const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        activeDayBlock: state.activeDayBlock,
        weatherData: state.weatherData,
        contentStatus: state.contentStatus,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab: (tab) => {
            dispatch({
                type: ACTION_TYPES.ACTIVE_TAB,
                payload: tab
            });
        },
        setActiveDayBlock: (activeDayBlock) => {
            dispatch({
                type: ACTION_TYPES.ACTIVE_DAY_BLOCK,
                payload: activeDayBlock
            });
        },
        setWeatherData: (weatherData) => {
            dispatch({
                type: ACTION_TYPES.WEATHER_DATA,
                payload: weatherData
            });
        },
        setContentStatus: (contentStatus) => {
            dispatch({
                type: ACTION_TYPES.CONTENT_STATUS,
                payload: contentStatus
            })
        }
    };
};