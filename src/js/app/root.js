import App from '../app';
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ACTION_TYPES, INITIAL_STATE } from "../constants"

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload
            };
        case ACTION_TYPES.WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload
            };
        case ACTION_TYPES.CONTENT_STATUS:
            return {
                ...state,
                contentStatus: action.payload
            };
        default:
            return state
    }
}

const store = createStore(reducer);

const AppRoot = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default AppRoot;