import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-section">
                    <p>Copyright © 2019
                        <strong>
                            {' '}PacknTag{' '}
                        </strong>
                    All rights reserved.</p>
                </div>
            </React.Fragment>
        );
    }
}
