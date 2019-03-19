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
                <div className="traveller-container">
                    <div className="bg-traveller">
                        <img src={require('../../img/bg-logo.png')} />
                    </div>
                    <div className="traveller-body">
                        <Traveller />
                    </div>
                    
                </div>
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
