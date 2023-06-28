import styles from "../../../styles.scss";
import React from "react";
import WeatherUtils from "../../classes/weather/utils";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../app/state";

const Daily = (props) => {
    const {dt, wind_deg, wind_speed, pressure, temp, feels_like, sunrise, sunset} = _.nth(props.weatherData.daily, props.activeDayBlock);

    const date = WeatherUtils.getDate(dt);

    return <div className={`${styles.vStack} ${styles.whiteSmokeBackground}`}>
        <div className={styles.contentHeader}>
            <h4>DAILY</h4>
        </div>

        <div className={styles.hStack} style={{justifyContent: "space-around"}}>
            <div className={styles.hStack} style={{width: "350px"}}>
                <div className={styles.vStack}>
                    <span style={{fontWeight: "bold"}}>{WeatherUtils.getDayOfWeek(date)}</span>
                    <span>Morning:</span>
                    <span>Day:</span>
                    <span>Evening:</span>
                    <span>Night:</span>
                </div>
                <div className={`${styles.vStack} ${styles.center}`}>
                    <span>Temp</span>
                    <span>{WeatherUtils.convertToCelsius(temp.morn)}</span>
                    <span>{WeatherUtils.convertToCelsius(temp.day)}</span>
                    <span>{WeatherUtils.convertToCelsius(temp.eve)}</span>
                    <span>{WeatherUtils.convertToCelsius(temp.night)}</span>
                </div>
                <div className={`${styles.vStack} ${styles.center}`}>
                    <span>Real Feel</span>
                    <span>{WeatherUtils.convertToCelsius(feels_like.morn)}</span>
                    <span>{WeatherUtils.convertToCelsius(feels_like.day)}</span>
                    <span>{WeatherUtils.convertToCelsius(feels_like.eve)}</span>
                    <span>{WeatherUtils.convertToCelsius(feels_like.night)}</span>
                </div>
            </div>
            <div className={styles.vStack} style={{width: "350px"}}>
                <div className={styles.hStack}>
                    <span>Sunrise:</span>
                    <span>{WeatherUtils.getFormattedTime(WeatherUtils.getDate(sunset))}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Sunset:</span>
                    <span>{WeatherUtils.getFormattedTime(WeatherUtils.getDate(sunrise))}</span>

                </div>
                <div className={styles.hStack}>
                    <span>Duration:</span>
                    <span>{WeatherUtils.calculateDayDuration(sunrise, sunset)}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Wind (km/h):</span>
                    <span>{WeatherUtils.convertWindSpeed(wind_speed)} {WeatherUtils.convertWindDirection(wind_deg)}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Pressure:</span>
                    <span>{WeatherUtils.convertHectoPascalToMillimetersOfMercury(pressure)}mm</span>
                </div>
            </div>
        </div>
    </div>;
}

export default connect(mapStateToProps)(Daily)
