import {Request} from "./request";
import {ActionTypes} from "./Actions";

export const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        weatherData: state.weatherData
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab: (tab) => {
            dispatch({type: ActionTypes.SET_ACTIVE_TAB, payload: tab});
        },
        setWeatherData: (geolocationPos) => {
            const weatherRequest = new Request('https://api.openweathermap.org', '/data/3.0/onecall');

            console.log(geolocationPos);

            weatherRequest.get(new URLSearchParams({
                lat: geolocationPos.lat,
                lon: geolocationPos.lon,
                appid: '106ae5545ed13f368eae3bfd72eacb3f'
            })).then(weatherData => dispatch({type: ActionTypes.SET_WEATHER_DATA, payload: weatherData}));
        },
    };
};