import styles from "../styles.scss";
import sunImage from "../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";

export default class HourlyWeather extends React.Component {
    render() {
        return <div className={`${styles.vStack} ${styles.center}`}>
            <span>7pm</span>
            <img src={sunImage} className={styles.large} alt=""></img>
            <span>Sunny</span>
            <span>29&#176;</span>
            <span>28&#176;</span>
            <span>11 ESE</span>
        </div>;
    }
}