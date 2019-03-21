import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './offer.css';

export default class Offer extends Component {

    render() {
        return (
            <div className="offer-container">
                <form className="text-center border border-light p-5">

                    <p className="h4 mb-4">Subscribe</p>
                    <p>Join our mailing list. We write rarely, but only the best content.</p>
                    <p>
                        <a href="" target="_blank">See the last newsletter</a>
                    </p>
                    <input type="text" id="defaultSubscriptionFormPassword" className="form-control mb-4" placeholder="Name" />
                    <input type="email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="E-mail" />
                    <button className="btn btn-info btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
};
