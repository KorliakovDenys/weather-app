import React from "react";
import styles from "../../../styles.scss";

const Error = () => {
    return <div className={`${styles.wrapper}`}>
        <div className={`${styles.vStack} ${styles.center}`} style={{width: "100%"}}>
            <span className={`${styles.fontSize_xLarge}`}>
                404
            </span>
            <span className={`${styles.fontSize_large}`}>
                Something went wrong.
            </span>
        </div>
    </div>
}

export default Error;