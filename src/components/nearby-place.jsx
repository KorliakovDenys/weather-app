import styles from "../styles.scss";
import sunImage from "../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";

export default class NearbyPlace extends React.Component {
    render() {
        return <div className={styles.hStack}>
            <span>Baladzhary</span>
            <div className={styles.hStack}>
                <img src={sunImage} alt="" className={styles.small}/>
                <span>36&#176;C</span>
            </div>
        </div>
    }
}