import {ActionTypes} from "./Actions";

const activeTab = 'Today'

const weatherData = null;

export const activeTabReducer = (state = activeTab, action) => {
    switch (action.type) {
        case ActionTypes.SET_ACTIVE_TAB:
            return action.payload;
        default:
            return state
    }
}

export const weatherDataReducer = (state = weatherData, action) => {
    switch (action.type) {
        case ActionTypes.SET_WEATHER_DATA:
            return action.payload;
        default:
            return state
    }
}
