import styles from "../../../../styles.scss";
import iconSun from "../../../../assets/images/free-icon-sun-rays-3385807.png";
import React from "react";

const FiveDaySegment = (props) => {
    return <div className={`${styles.vStack} ${styles.center}`}>
        <h4>TONIGHT</h4>
        <span>JUN 30</span>
        <img src={iconSun} alt="" className={styles.xLarge}/>
        <span style={{fontSize: "2rem"}}>25&#176;C</span>
        <span>Clear, Warm</span>
    </div>
}

export default FiveDaySegment;