import React from "react";
import styles from "../../../styles.scss";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../app/state";
import _ from 'lodash'
import WeatherUtils from "../../classes/weather/utils";
import {DAY_BLOCKS} from "../../constants";
import classNames from "classnames";

const FiveDay = (props) => {
    const {weatherData, activeDayBlock, setActiveDayBlock} = props;
    const getFiveDaySegments = () =>{
        return _.map(DAY_BLOCKS, (value, key) => {
            const {weather, temp, dt} = _.nth(weatherData.daily, value);

            const date = WeatherUtils.getDate(dt)
            const handleClick = () =>{
                setActiveDayBlock(value);
            }

            const selectStyle = classNames({
                [styles.dailyBlock_selected]: value === activeDayBlock,
                [styles.dailyBlock]:value !== activeDayBlock
            })

            return <div className={`${styles.vStack} ${styles.center} ${selectStyle}`} onClick={handleClick} style={{cursor: "pointer"}}>
                <h4>{WeatherUtils.getDayOfWeek(date)}</h4>
                <span>{WeatherUtils.getMonthName(date)}, {WeatherUtils.getDayOfMonth(date)} </span>
                <img src={WeatherUtils.getWeatherIcon(_.nth(weather)?.icon)} alt="" className={styles.xLarge}/>
                <div className={styles.hStack}>
                    <span style={{fontSize: "1.4rem"}}>{WeatherUtils.convertToCelsius(temp.max)}</span>
                    <span style={{fontSize: "1.4rem", color: "gray"}}>{WeatherUtils.convertToCelsius(temp.min)}</span>
                </div>
                <span>{_.nth(weather)?.main}</span>
            </div>
        })
    }

    return <div className={`${styles.hStack} ${styles.veryLightGrayChildDiv} ${styles.stretchChild}`}>
        {getFiveDaySegments()}
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(FiveDay)