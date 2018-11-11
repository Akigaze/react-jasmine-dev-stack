import React, {Component} from "react";

import DemoList from "./component/demo-list.js";
import "./style/app.css";


export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Hello React!</h1>
                <DemoList />
            </div>
        )
    }
}
