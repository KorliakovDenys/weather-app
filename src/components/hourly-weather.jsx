import styles from "../styles.scss";
import sunImage from "../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";
import WeatherDataProcessor from "../js/weatherDataProcessor";

export const HourlyWeather = (props) => {
    const weatherDP = new WeatherDataProcessor();
    console.log(props)
    return <div className={`${styles.vStack} ${styles.center}`}>
        <span>{weatherDP.convertToAMPM(props.hours)}</span>
        <img src={weatherDP.getWeatherIcon(props.weather[0].icon)} className={styles.large} alt=""></img>
        <span>{props.weather[0].main}</span>
        <span>{weatherDP.convertToCelsius(props.temp)}&#176;</span>
        <span>{weatherDP.convertToCelsius(props.feels_like)}&#176;</span>
        <span>{weatherDP.convertWindSpeed(props.wind_speed)} {weatherDP.convertWindDirection(props.wind_deg)}</span>
    </div>;
}