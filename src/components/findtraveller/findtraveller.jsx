import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

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

                {/* <div className="fade fade-backward-enter-done">
                    <div className="wrapper u-heightMax">
                        <h1>Find a traveller</h1>
                        <div className="relative">
                            <div className="pb-m">
                                <a className="uneditableTextField" href="/search-car-sharing/from">
                                    <div className="jsx-1556137228 uneditableTextField-label uneditableTextField-label--ellipsis">
                                        <span className="text-secondaryText">
                                            <font className="font-align">
                                                <font className="font-align">Departure from
                                            </font>
                                        </font>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className="pb-m">
                                <a className="uneditableTextField" href="/search-car-sharing/to">
                                    <div className="jsx-1556137228 uneditableTextField-label uneditableTextField-label--ellipsis">
                                        <span className="text-secondaryText">
                                            <font className="font-align">
                                                <font className="font-align">Arrival at
                                                </font>
                                            </font>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className="traveller-container">
                        <Form>
                            <h1>Find a traveller</h1>
                            <FormGroup controlId="formBasicEmail">
                                <FormControl type="text" placeholder="Departure from" />
                            </FormGroup>

                            <FormGroup controlId="formBasicPassword">
                                <FormControl type="text" placeholder="Arrival at" />
                            </FormGroup>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    
                {/* </div> */}
                
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
