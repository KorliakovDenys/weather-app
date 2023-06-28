import styles from "../../../styles.scss";
import React from "react";
import WeatherUtils from "../../classes/weather/utils";

const Current = (props) => {
    const {weather, temp, feels_like, sunrise, sunset} = props.data;

    return <div className={`${styles.vStack} ${styles.whiteSmokeBackground}`}>
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
                <span style={{fontSize: "3rem"}}>{WeatherUtils.convertToCelsius(temp)}</span>
                <span>Real Feel {WeatherUtils.convertToCelsius(feels_like)}</span>
            </div>
            <div className={styles.vStack} style={{width: "200px", height: "145px"}}>
                <div className={styles.hStack}>
                    <span>Sunrise:</span>
                    <span>{WeatherUtils.getFormattedTime(WeatherUtils.getDate(sunrise))}</span>
                </div>
                <div className={styles.hStack}>
                    <span>Sunset:</span>
                    <span>{WeatherUtils.getFormattedTime(WeatherUtils.getDate(sunset))}</span>

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