import React, {Component} from "react";

import "../style/app.css";

export default class DemoList extends Component {
    constructor(props) {
        super(props);
    }
    click = () => {
        console.log("click me");
    }
    render(){
        let items = ["React", "Jasmine", "Enzyme", "Jamsine-Enzyme"];
        return(
            <ul className="list">
                {items.map(item => <li key={item} onClick={this.click}>{item}</li>)}
            </ul>
        )
    }
}
