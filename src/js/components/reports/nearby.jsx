import styles from "../../../styles.scss";
import React, {Fragment} from "react";
import iconSun from "../../../assets/images/free-icon-sun-rays-3385807.png"
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../app/state";
import WeatherUtils from "../../classes/weather/utils";

const Nearby = (props) => {
    const {list} = props.weatherData.nearby;

    if(_.isEmpty(list)) return;

    const getPlaceBlocks = () => {
        return _.map(list, (element) => {
            const {name, weather, main} = element;
            return <Fragment key={`placeBlock-${name}`}>
                <div className={styles.hStack}>
                    <span>{name}</span>
                    <div className={styles.hStack}>
                        <img
                            alt="weather"
                            className={styles.small}
                            src={WeatherUtils.getWeatherIcon(_.nth(weather)?.icon)}
                        />
                        <span style={{width: "50px"}}>{WeatherUtils.convertToCelsius(main.temp)}</span>
                    </div>
                </div>
            </Fragment>
        })
    }

    return <div className={`${styles.vStack} ${styles.whiteSmokeBackground}`}>
        <div className={styles.contentHeader}>
            <h4>NEARBY PLACES</h4>
        </div>
        <div className={`${styles.grid} ${styles.veryLightGrayChildDiv}`}>
            { getPlaceBlocks() }
        </div>
    </div>

}

export default connect(mapStateToProps)(Nearby)