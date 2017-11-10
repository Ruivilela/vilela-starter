import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import components here
import Counter from '@app/components/counter/index';

export default class MainRouter extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Counter} />
            </Switch>
        )
    }
}
