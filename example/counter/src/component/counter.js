import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { count, clickAdd, clickReduce } = this.props;
    return (
      <div>
        <h1 className="jumbotron-heading text-center">{count}</h1>
        <p className="text-center">
          <button onClick={clickAdd} className="btn btn-primary mr-2">
            Increase
          </button>
          <button onClick={clickReduce} className="btn btn-danger mr-2">
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

export default Counter;
