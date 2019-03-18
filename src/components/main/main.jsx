import React, { Component } from 'react';
import './main.css';

import Header from '../header';
import Traveller from '../traveller';
import Footer from '../footer';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="container-fliud">
                <div className="header-container">
                    <Header />
                </div>                
                <div>
                    <Traveller />
                </div>
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
