import React from "react";
import styles from "../../../../styles.scss";
import _ from 'lodash';
import WeatherUtils from "../../../classes/weather/utils";

export const HourlySegment = (props) => {
    const {hours, weather, temp, feels_like, wind_speed, wind_deg} = props.data;

    return <div className={`${styles.vStack} ${styles.center}`}>
        <span>{WeatherUtils.convertToAMPM(hours)}</span>
        <img
            src={WeatherUtils.getWeatherIcon(_.nth(weather)?.icon)}
            className={styles.large}
            alt="weather"
        />
        <span>{_.nth(weather)?.main}</span>
        <span>{WeatherUtils.convertToCelsius(temp)}</span>
        <span>{WeatherUtils.convertToCelsius(feels_like)}</span>
        <span>{WeatherUtils.convertWindSpeed(wind_speed)} {WeatherUtils.convertWindDirection(wind_deg)}</span>
    </div>;
}