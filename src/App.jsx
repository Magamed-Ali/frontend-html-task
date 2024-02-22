import React from 'react'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import classnames from "classnames";
import Toggle from "./components/Toggle/Toggle.jsx";

library.add(fas);

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            theme: true
        };
    }

    render() {

        const {theme} = this.state

        const containerClassnames = classnames(
            'app',
            theme ? 'app-light' : 'app-dark',
        );

        return (
            <div className={containerClassnames} >
                <Sidebar theme={theme}/>
                <Toggle isActive={theme} setState={() => this.setState({theme: !theme})}/>
            </div>
        )
    }
}
