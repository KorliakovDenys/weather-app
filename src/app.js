import styles from './styles.scss'
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Header from './components/header'
import Content from "./components/content";
import Nav from "./components/nav";
import {Provider} from "react-redux";
import {createStore} from "redux";


const initialState = {
    activeTab: 'Today',
    weatherData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_TAB':
            return {
                ...state,
                activeTab: action.payload
            };
        case 'SET_WEATHER_DATA':
            return {
                ...state,
                weatherData: action.payload
            };
        default:
            return state
    }
}

const store = createStore(reducer);
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className={styles.container}>
                    <Header/>
                    <Nav/>
                    <Content/>
                </div>
            </Provider>
        );
    }
}
