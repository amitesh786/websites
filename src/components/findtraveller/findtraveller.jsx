import React, { Component } from 'react';
// import { Button, Form } from 'react-bootstrap';

import './findtraveller.css';

import Header from '../header';
import Footer from '../footer';

export default class FindTraveller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        //handle form processing here....
    }

    render() {
        const { email, password, confirmPassword } = this.state;

        return (
            <div className="container-fliud">
                <div className="header-container">
                    <Header />
                </div>
                
                {/* #TODO form */}
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
