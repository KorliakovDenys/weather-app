import styles from "../styles.scss";
import React from "react";
import DayPlate from "./day-plate";

export default class FiveDay extends React.Component {
    render() {
        return <div className={`${styles.hStack} ${styles.veryLightGrayChildDiv} ${styles.stretchChild}`}>
            <DayPlate/>
            <DayPlate/>
            <DayPlate/>
            <DayPlate/>
            <DayPlate/>
        </div>
    }
}