import React, {Component} from "react";

import "../style/app.css";

export default class FeatureList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ul className="list">
                <li>Jamsine</li>
                <li>Enzyme</li>
                <li>Jamsine-Enzyme</li>
            </ul>
        )
    }
}
