import styles from '../styles.scss'
import '../styles.scss'
import React from "react";
import Hourly from "./hourly";
import Current from "./current";
import Nearby from "./nearby";
import FiveDay from "./five-day";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../js/navState";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        switch (this.props.activeTab){
            case 'Today':
                return <div className={styles.wrapper}>
                    <Current/>
                    <Hourly/>
                    <Nearby/>
                </div>
            case 'FiveDay':{
                return <div className={styles.wrapper}>
                    <FiveDay/>
                    <Hourly/>
                </div>
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)