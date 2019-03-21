import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './webapp.css';
import Main from '../main';
import FindTraveller from '../findtraveller';

export default class WebApp extends Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/packntag" component={Main} />
                    <Route path="/serach-to-traveller" component={FindTraveller} />
                </Switch>
            </React.Fragment>
        );
    }
};
