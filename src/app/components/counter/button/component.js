import React, { Component } from 'react';
import typings from './typings';
import style from './style'

export default class CounterButton extends Component {
    render() { 
        return(
            <div>
                <button
                    className={`btn btn-lg ${this.props.buttonClass}`}
                    style={style.button}
                    data-action={this.props.action} 
                    onClick={::this.updateCounter}
                >
                    {this.props.buttonText}
                </button>        
            </div>
        )
    }

    updateCounter(e){
        const action = e.target.dataset.action
        this.props.actions[action]()
    }
}

CounterButton.propTypes = typings;

