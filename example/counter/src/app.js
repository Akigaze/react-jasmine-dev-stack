import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Counter from "./component/counter";
import "./style/app.css";

import {increaseAction, decreaseAction} from "./action/countActionCreator";

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="container">
                <h1>{`The Sum: ${this.props.sum}`}</h1>
                <CounterGroup {...this.props}/>
            </div>
        )
    }
}

const CounterGroup = (props) => {
    const {counters, increase, decrease} = props
    return counters.map((count, index) => {
        return <Counter key={index} count={count} clickAdd={() => {increase(index)}} clickReduce={() => {decrease(index)}}/>
    })
}

const mapStateToProps = (state) => {
    return{
        sum:state.sum,
        counters:state.counters
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({increase: increaseAction, decrease: decreaseAction},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
