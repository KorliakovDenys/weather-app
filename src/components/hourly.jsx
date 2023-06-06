import styles from "../styles.scss";
import {HourlyWeather} from "./hourly-weather";
import React from "react";

export const Hourly = (props) => {
    let components = [];

    let time = new Date();
    for (let i = 0; i < 6; i++) {
        components.push(new HourlyWeather({...props.hourly[i], hours: time.getHours()}))
        time.setHours(time.getHours() + 1);
    }

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
            {components}
        </div>
    </div>;
}