import styles from "../styles.scss";
import sunImage from "../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";

export default class Current extends React.Component {
    render() {
        return <div className={styles.vStack}>
            <div className={styles.contentHeader}>
                <h4>CURRENT WEATHER</h4>
                <h5>26.05.2023</h5>
            </div>
            <div className={styles.hStack} style={{justifyContent: "space-around"}}>
                <div className={styles.vStack}>
                    <img src={sunImage} alt="" className={styles.large}/>
                    <span className={styles.center}>Sunny</span>
                </div>
                <div className={styles.vStack}>
                    <span style={{fontSize: "3rem"}}>29&#176;С</span>
                    <span>Real Feel 30&#176;С</span>
                </div>
                <div className={styles.vStack}>
                    <div className={styles.hStack}>
                        <span>Sunrise:</span>
                        <span>7:04 AM</span>
                    </div>
                    <div className={styles.hStack}>
                        <span>Sunset:</span>
                        <span>5:11 PM</span>
                    </div>
                    <div className={styles.hStack}>
                        <span>Duration:</span>
                        <span>10:07 hr</span>
                    </div>
                </div>
            </div>
        </div>;
    }
}