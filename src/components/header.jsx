import '../styles.scss'
import React from "react";
import searchIcon from "../assets/images/search.svg"

export default class Header extends React.Component {

    render() {
        return <header>
            <form action="">
                <h1>My Weather</h1>
                <input type={"text"} placeholder={"Country, City"}/>
                <button type={"submit"}>
                    <object data={searchIcon} style={{pointerEvents: 'none'}}/>
                </button>
            </form>
        </header>
    }
}