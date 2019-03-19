import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlusCircle, faTh } from '@fortawesome/free-solid-svg-icons';

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
                            <a href="/packntag">
                                <FontAwesomeIcon className="fa-logo" icon={faTh} />
                                {' '} PacknTag
                            </a>
                        </div>
                        <nav className="conatiner-right-nav">
                            <ul className="container-right-items u-reset">
                                <li className="item">
                                    <a href="/serach-to-traveller">{' '}
                                        <FontAwesomeIcon className="faSearch" icon={faSearch} /> {' '}
                                        {' '} Find
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="#">{' '}
                                        <FontAwesomeIcon className="faPlusCircle" icon={faPlusCircle} /> {' '}
                                        {' '} Offer
                                    </a>
                                </li>

                                <li className="item">
                                    <a href="#">{' '}
                                        {' '} Signin
                                    </a>
                                </li>

                                <li className="item">
                                    <a href="#">{' '}
                                        {' '} Login
                                    </a>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>                    
                </div>                
            </React.Fragment>
        );
    }
}
