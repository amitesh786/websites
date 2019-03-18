import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './webapp.css';
import Main from '../main';

export default class WebApp extends Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                <Main />
                    <Route path="/packntag" component={Main} />
                </Switch>
            </React.Fragment>
        );
    }
};
