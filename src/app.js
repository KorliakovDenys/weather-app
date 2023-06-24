import styles from './styles.scss'
import React from "react";
import Header from './components/header'
import Content from "./components/content";
import Nav from "./components/nav";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./js/rootReducer";

const store = createStore(rootReducer);
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className={styles.container}>
                    <Header/>
                    <Nav/>
                    <Content/>
                </div>
            </Provider>
        );
    }
}
