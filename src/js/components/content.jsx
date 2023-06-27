import React, {Fragment} from "react";
import styles from '../../styles.scss'
import _ from 'lodash'
import Hourly from "./reports/hourly";
import Current from "./reports/current";
import Nearby from "./reports/nearby";
import FiveDay from "./reports/five-day";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../app/state";
import {CONTENT_STATES, TABS} from "../constants"
import Loader from "./reports/loader";
import Error from "./reports/error";

const Content = (props) => {
    const {activeTab, weatherData, contentStatus} = props;

    const getSelectedTabWeatherReports = () => {
        if (_.isEmpty(weatherData)) return null;

        switch (contentStatus){
            case CONTENT_STATES.READY: {
                switch (activeTab) {
                    case TABS.TODAY:
                        return <div className={styles.wrapper}>
                            <Current data={weatherData.current}/>
                            <Hourly data={weatherData.hourly}/>
                            <Nearby/>
                        </div>
                    case TABS.FIVE_DAY: {
                        return <div className={styles.wrapper}>
                            <FiveDay data={weatherData.hourly}/>
                            <Hourly data={weatherData.hourly}/>
                        </div>
                    }
                    default:
                        return;
                }
            }
            case CONTENT_STATES.LOADING: {
                return <Loader data={styles.xLarge}/>
            }
            case CONTENT_STATES.ERROR: {
                return <Error/>
            }
        }


    }

    return <Fragment>
        {getSelectedTabWeatherReports()}
    </Fragment>
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)