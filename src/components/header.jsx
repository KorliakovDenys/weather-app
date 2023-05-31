import '../styles.scss'
import React from "react";
import searchIcon from "../assets/images/search.svg"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationInput: ""
        };
    }

    handleChange = event => {
        this.setState({
            locationInput: event.target.value
        });
    }

    render() {
        return <header>
            <form action="">
                <h1>My Weather</h1>
                <input type={"text"} placeholder={"Country, City"} onInput={this.handleChange}/>
                <button type={"submit"}>
                    <object data={searchIcon} style={{ pointerEvents: 'none' }}/>
                </button>
            </form>
        </header>
    }
}