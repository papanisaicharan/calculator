import React from "react";

import "./PreviousResult.css";

export default class PreviousResult extends React.Component {

  render() {
    return (
      <div className="prev-result-display">
        <span className="label">Previous Result: </span>
        <span>{this.props.value}</span>
      </div>
    );
  }
}
