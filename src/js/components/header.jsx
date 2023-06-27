import React from "react";
import styles from "../../styles.scss";
import searchIcon from "../../assets/images/search.svg";
import {APP_HEADER_TEXT} from "../constants";

const Header = (props) => {
    let inputValue;

    const handleChange = event => {
        inputValue = event.target.value;
    }

    const handleClick = () => {
        props.handleSearch(inputValue);
    };

    return <header>
        <div className={styles.searchForm}>
            <h1>{ APP_HEADER_TEXT }</h1>
            <input type={"text"} className={styles.searchInput} placeholder={"Country, City"} onInput={handleChange}/>
            <button className={styles.searchButton} onClick={handleClick}>
                <object data={searchIcon} style={{ pointerEvents: 'none' }}/>
            </button>
        </div>
    </header>;
}


export default Header;