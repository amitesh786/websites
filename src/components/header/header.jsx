import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headerTitle: ""
        };
    }

    render() {
        const headerTitle = this.props.title;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="container-header">
                        <div className="conatiner-left-logo">
                            <a href="#"> PacknTag </a>
                        </div>
                        <nav className="conatiner-right-nav">
                            <ul className="container-right-items u-reset">
                                <li className="item"><a href="#">Find</a></li>
                                <li className="item"><a href="#">Offer</a></li>
                                <li className="item"><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>                    
                </div>                
            </React.Fragment>
        );
    }
}
