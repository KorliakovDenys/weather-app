import styles from '../styles.scss'
import '../styles.scss'
import React from "react";
import {Hourly} from "./hourly";
import {Current} from "./current";
import Nearby from "./nearby";
import FiveDay from "./five-day";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../js/navState";
import WeatherDataProcessor from "../js/weatherDataProcessor"
import {Request} from "../js/request";

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;

        this.weatherDataProcessor = new WeatherDataProcessor();

        this.weatherDataProcessor.getCurrentGeoLocation().then(data => this.props.setWeatherData(data));
    }



    render() {
        console.log(this.props);

        if(this.props.weatherData === null) return

        switch (this.props.activeTab) {
            case 'Today':
                return <div className={styles.wrapper}>
                    <Current current={this.props.weatherData.current}/>
                    <Hourly  hourly={this.props.weatherData.hourly}/>
                    <Nearby/>
                </div>
            case 'FiveDay': {
                return <div className={styles.wrapper}>
                    <FiveDay current={this.props.weatherData.hourly}/>
                    <Hourly/>
                </div>
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)