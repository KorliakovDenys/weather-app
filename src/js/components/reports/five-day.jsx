import React from "react";
import styles from "../../../styles.scss";
import FiveDaySegment from "./segments/five-day-segment";

const FiveDay = (props) => {
    return <div className={`${styles.hStack} ${styles.veryLightGrayChildDiv} ${styles.stretchChild}`}>
        <FiveDaySegment/>
        <FiveDaySegment/>
        <FiveDaySegment/>
        <FiveDaySegment/>
        <FiveDaySegment/>
    </div>
}

export default FiveDay