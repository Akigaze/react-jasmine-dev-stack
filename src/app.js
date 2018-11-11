import React, {Component} from "react";

import FeatureList from "./component/feature-list.js";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Hello Enzyme!</h1>
                <FeatureList />
            </div>
        )
    }
}
