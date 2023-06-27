import React from "react";
import styles from "../../../styles.scss";

const Loader = (props) => {
    return <div className={`${styles.wrapper}`}>
        <div className={`${styles.vStack} ${styles.center}`} style={{width: "100%"}}>
            <span className={`${styles.loader} ${props.data}`}></span>
        </div>
    </div>
}

export default Loader;