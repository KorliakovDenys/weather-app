import styles from "../styles.scss";
import sunImage from "../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";
import WeatherDataProcessor from "../js/weatherDataProcessor";

export const Current = (props) => {
    const weatherDP = new WeatherDataProcessor();

    return <div className={styles.vStack}>
        <div className={styles.contentHeader}>
            <h4>CURRENT WEATHER</h4>
            <h5>{new Date().toLocaleDateString()}</h5>
        </div>
        <div className={styles.hStack} style={{justifyContent: "space-around"}}>
            <div className={styles.vStack}>
                <img src={weatherDP.getWeatherIcon(props.current.weather[0].icon)} alt="" className={styles.large}/>
                <span className={styles.center}>{props.current.weather[0].main}</span>
            </div>
            <div className={styles.vStack}>
                <span style={{fontSize: "3rem"}}>{weatherDP.convertToCelsius(props.current.temp)}&#176;С</span>
                <span>Real Feel {weatherDP.convertToCelsius(props.current.feels_like)}&#176;С</span>
            </div>
            <div className={styles.vStack}>
                <div className={styles.hStack}>
                    <span>Sunrise:</span>
                    <span>{new Date(props.current.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Sunset:</span>
                    <span>{new Date(props.current.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Duration:</span>
                    <span>{weatherDP.calculateDayDuration(props.current.sunrise, props.current.sunset)}</span>
                </div>
            </div>
        </div>
    </div>;
}