import React, { Component } from 'react';
import CounterButton from './button/index';
import style from './style';

export default class Counter extends Component {
  render() {
    return(
      <div>
        <h1 style={style.title}> 
          Welcome to my counter!
        </h1> 
        <h2 style={style.counter}>
          {this.props.counter.value}
        </h2>
        <div className="row">
          <div className="col-md-2 col-md-offset-4">
            <CounterButton
              buttonClass={"btn-success"}
              action={"increase"}
              buttonText={"add"}
            />
          </div> 
          <div className="col-md-2">
            <CounterButton
              buttonClass={"btn-danger"}
              action={"decrease"}
              buttonText={"decrease"}
            />
          </div> 
        </div> 
      </div>
    )
  }
}
