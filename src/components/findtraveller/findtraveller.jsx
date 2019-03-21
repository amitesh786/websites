import React, { Component } from 'react';
// import { Button, Form } from 'react-bootstrap';

import './findtraveller.css';

import Header from '../header';
import Footer from '../footer';

export default class FindTraveller extends Component {

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
                
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
