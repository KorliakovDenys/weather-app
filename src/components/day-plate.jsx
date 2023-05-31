import styles from "../styles.scss";
import sunImage from "../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";

export default class DayPlate extends React.Component {
    render() {
        return <div className={`${styles.vStack} ${styles.center}`}>
            <h4>TONIGHT</h4>
            <span>JUN 30</span>
            <img src={sunImage} alt="" className={styles.xLarge}/>
            <span style={{fontSize: "2rem"}}>25&#176;C</span>
            <span>Clear, Warm</span>
        </div>
    }
}