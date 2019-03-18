import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="footer-section">
                    <span>Copyright</span>
                </div>
            </React.Fragment>
        );
    }
}
