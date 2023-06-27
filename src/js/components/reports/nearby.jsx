import styles from "../../../styles.scss";
import React from "react";
import iconSun from "../../../assets/images/free-icon-sun-rays-3385807.png"

const Nearby = (props) => {
    const getPlaceBlock = (city, temp, icon) =>{
        return <div className={styles.hStack}>
            <span>{ city }</span>
            <div className={styles.hStack}>
                <img
                    alt="weather"
                    className={styles.small}
                    src={iconSun}
                />
                <span>{temp}&#176;C</span>
            </div>
        </div>;
    }

    return <div className={styles.vStack}>
        <div className={styles.contentHeader}>
            <h4>NEARBY PLACES</h4>
        </div>
        <div className={`${styles.grid} ${styles.veryLightGrayChildDiv}`}>
            { getPlaceBlock("Kyiv", 22) }
            { getPlaceBlock("Kharkiv", 22) }
            { getPlaceBlock("Sumy", 22) }
            { getPlaceBlock("Dnipro", 22) }
        </div>
    </div>

}

export default Nearby;