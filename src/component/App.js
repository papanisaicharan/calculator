import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import PreviousResult from "./PreviousResult";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  toggle = true;
  previousOperations = [];

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
    console.log(this.state);
    if(this.state.total != null && this.state.next != null && this.state.operation != null){
      this.previousOperations.push(this.state);
    }
    console.log(this.previousOperations);
  };

  clear = () => {
    window.location.reload();
  };

  render() {
    if(this.previousOperations.length){
      this.previousOperations.at(this.previousOperations.length-1).result = this.state.total;
    }
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <PreviousResult value={this.state.total || "0"}/>
        <ButtonPanel clickHandler={this.handleClick} />
          <span className="heading">History</span>
          <button onClick={this.clear} >Clear</button>
        <div className="panel-and-history">
          {
            this.previousOperations.map((x,i) =>{
                return <><span>{x.total} {x.operation === 'x^y'? '^':x.operation} {x.next} = {x.result}</span><br /></>
            })
          }
        </div>
      </div>
    );
  }
}
