import styles from "../styles.scss";
import HourlyWeather from "./hourly-weather";
import React from "react";

export default class Hourly extends React.Component{
    render(){
        return <div className={styles.vStack}>
            <div className={styles.contentHeader}>
                <h4>HOURLY</h4>
            </div>
            <div className={styles.hStack}>
                <div className={styles.vStack}>
                    <span style={{fontWeight: "bold"}}>TODAY</span>
                    <div className={styles.large}></div>

                    <span>Forecast</span>
                    <span>Temp (C&#176;)</span>
                    <span>Real Feel</span>
                    <span>Wind (km/h)</span>
                </div>
                <HourlyWeather/>
                <HourlyWeather/>
                <HourlyWeather/>
                <HourlyWeather/>
                <HourlyWeather/>
                <HourlyWeather/>
            </div>
        </div>;
    }
}