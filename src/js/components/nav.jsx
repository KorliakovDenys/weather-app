import React from "react";
import styles from "../../styles.scss";
import classNames from "classnames";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../app/state";
import {TABS, TABS_TEXT} from "../constants";

const Nav = (props) => {
    const {activeTab, setActiveTab} = props;

    const getNavTabs = () => {
        return _.map(TABS, (tab) => {
            const isTabActive = activeTab === tab;

            return <li
                key={`tab_${tab}`}
                className={classNames({
                    [styles.navItem_selected]: isTabActive,
                    [styles.navItem]: !isTabActive
                })}
                onClick={() => setActiveTab(tab)}
            >
                <h2>{TABS_TEXT[tab]}</h2>
            </li>
        });
    }

    return <nav>
        <ul>
            {getNavTabs()}
        </ul>
    </nav>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)