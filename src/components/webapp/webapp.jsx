import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './webapp.css';
import Main from '../main';
import FindTraveller from '../findtraveller';
import Login from '../login';
import SignIn from '../signin';
import Offer from '../offer';

export default class WebApp extends Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/packntag" component={Main} />
                    <Route path="/serach-to-traveller" component={FindTraveller} />
                    <Route path="/login" component={Login} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/offer" component={Offer} />
                </Switch>
            </React.Fragment>
        );
    }
};
