import styles from "../styles.scss";
import React from "react";
import {connect} from "react-redux";
import '../js/navState'
import {mapDispatchToProps, mapStateToProps} from "../js/navState";

const Nav = (props) => {
    return <nav>
        <ul>
            <li className={props.activeTab === 'Today' ? styles.navItem_selected : styles.navItem}
                onClick={() => props.setActiveTab('Today')}>
                <h2>Today</h2>
            </li>
            <li className={props.activeTab === 'FiveDay' ? styles.navItem_selected : styles.navItem}
                onClick={() => props.setActiveTab('FiveDay')}>
                <h2>5-day forecast</h2>
            </li>
        </ul>
    </nav>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)