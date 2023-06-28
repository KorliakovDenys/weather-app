import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Nav from "./components/nav";
import WeatherAPI from "./classes/weather/api"
import styles from "../styles.scss";
import _ from 'lodash';
import { mapDispatchToProps, mapStateToProps } from "./app/state";
import { connect } from "react-redux";
import {CONTENT_STATES} from "./constants";

class App extends React.Component {
    #weatherAPI;

    constructor(props) {
        super(props);

        this.#weatherAPI = new WeatherAPI;
        this.handleSearch = this.handleSearch.bind(this);

        this.#updateWeatherData(null).then();
    }

    async handleSearch(city) {
        this.props.setContentStatus(CONTENT_STATES.LOADING);
        const location = await this.#weatherAPI.getCityLocation(city);

        if(_.isEmpty(location)){
            this.props.setContentStatus(CONTENT_STATES.ERROR);
            return;
        }

        await this.#updateWeatherData(_.nth(location));
    }

    async #updateWeatherData(location) {
        const data = await this.#weatherAPI.getDataByLocation(location);

        console.log(data);

        if(_.isEmpty(data)){
            this.props.setContentStatus(CONTENT_STATES.ERROR);
            return;
        }

        this.props.setWeatherData(data);
        this.props.setContentStatus(CONTENT_STATES.READY);
    }

    render() {
        return <div className={styles.container}>
            <Header handleSearch={this.handleSearch}/>
            <Nav/>
            <Content/>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
