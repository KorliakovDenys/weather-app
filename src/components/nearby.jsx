import styles from "../styles.scss";
import React from "react";
import NearbyPlace from "./nearby-place";

export default class Nearby extends React.Component {
    render() {
        return <div className={styles.vStack}>
            <div className={styles.contentHeader}>
                <h4>NEARBY PLACES</h4>
            </div>
            <div className={`${styles.grid} ${styles.veryLightGrayChildDiv}`}>
                <NearbyPlace/>
                <NearbyPlace/>
                <NearbyPlace/>
                <NearbyPlace/>
            </div>
        </div>
    }
}