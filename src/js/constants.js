export const APP_HEADER_TEXT = 'Weather App';

export const ACTION_TYPES = {
    ACTIVE_TAB: "SET_ACTIVE_TAB",
    WEATHER_DATA: "SET_WEATHER_DATA",
    CONTENT_STATUS: "SET_CONTENT_STATUS"
};

export const TABS = {
    TODAY: "Today",
    FIVE_DAY: "FiveDay",
};

export const TABS_TEXT = {
    [TABS.TODAY]: "Today",
    [TABS.FIVE_DAY]: '5-day forecast',
};

export const CONTENT_STATES = {
    READY: "READY",
    LOADING: 'LOADING',
    ERROR: 'ERROR'
};

export const INITIAL_STATE = {
    activeTab: TABS.TODAY,
    weatherData: null,
    contentStatus: CONTENT_STATES.LOADING
};

export const VALID_CONTENT_TYPES = {
    JSON: 'json',
    TEXT: 'text',
    FORM: 'form',
    URLENCODED: 'urlencoded',
};

export const CONTENT_TYPE_HEADERS = {
    [VALID_CONTENT_TYPES.JSON]: 'application/json',
    [VALID_CONTENT_TYPES.TEXT]: 'text/plain',
    [VALID_CONTENT_TYPES.URLENCODED]: 'application/x-www-form-urlencoded',
    [VALID_CONTENT_TYPES.FORM]: 'multipart/form-data',
};

export const REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
};
