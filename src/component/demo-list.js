import React, {Component} from "react";

import "../style/app.css";

export default class DemoList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ul className="list">
                <li>React</li>
                <li>Jamsine</li>
                <li>Enzyme</li>
                <li>Jamsine-Enzyme</li>
            </ul>
        )
    }
}
