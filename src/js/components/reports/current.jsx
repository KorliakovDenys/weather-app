import styles from "../../../styles.scss";
import React from "react";
import WeatherUtils from "../../classes/weather/utils";
// import _ from 'lodash;'

const Current = (props) => {
    const {weather, temp, feels_like, sunrise, sunset} = props.data;

    const getFormattedTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString(
            [],
            {
                hour: 'numeric',
                minute: '2-digit'
            }
        );
    };

    return <div className={styles.vStack}>
        <div className={styles.contentHeader}>
            <h4>CURRENT WEATHER</h4>
            <h5>{new Date().toLocaleDateString()}</h5>
        </div>
        <div className={styles.hStack} style={{justifyContent: "space-around"}}>
            <div className={`${styles.vStack} ${styles.center}`} style={{width: "200px", height: "145px"}}>
                <div className={styles.vStack}>
                    <img src={WeatherUtils.getWeatherIcon(_.nth(weather)?.icon)} alt="" className={styles.large}/>
                </div>
                <span className={styles.center}>{_.nth(weather)?.main}</span>
            </div>
            <div className={styles.vStack} style={{height: "145px"}}>
                <span style={{fontSize: "3rem"}}>{WeatherUtils.convertToCelsius(temp)}&#176;С</span>
                <span>Real Feel {WeatherUtils.convertToCelsius(feels_like)}&#176;С</span>
            </div>
            <div className={styles.vStack} style={{width: "200px", height: "145px"}}>
                <div className={styles.hStack}>
                    <span>Sunrise:</span>
                    <span>{getFormattedTime(sunrise)}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Sunset:</span>
                    <span>{getFormattedTime(sunset)}</span>

                </div>
                <div className={styles.hStack}>
                    <span>Duration:</span>
                    <span>{WeatherUtils.calculateDayDuration(sunrise, sunset)}</span>
                </div>
            </div>
        </div>
    </div>;
}

export default Current;