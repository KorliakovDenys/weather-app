import {combineReducers} from "redux";
import {activeTabReducer, weatherDataReducer} from "./reducers";

export const rootReducer = combineReducers({
    activeTab: activeTabReducer,
    weatherData: weatherDataReducer,
})
