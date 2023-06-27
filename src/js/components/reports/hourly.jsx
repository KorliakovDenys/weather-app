import styles from "../../../styles.scss";
import {HourlySegment} from "./segments/hourly-segment";
import React from "react";

const Hourly = (props) => {
    const hourReportLimit = 6
    let components = [];
    let time = new Date();

    for (let i = 0; i < 6; i++) {
        components.push(<HourlySegment
            key={`hourly-${i}`}
            data={{
                ...props.data[i],
                hours: time.getHours()
            }}
        />);

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

export default Hourly;