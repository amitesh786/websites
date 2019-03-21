import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './login.css';

export default class Login extends Component {

    render() {
        return (
            <div className="login-container">
                <form className="text-center border border-light m-5 p-5">
                    <p className="h4 mb-4">Sign in</p>

                    <input type="email" className="form-control mb-4" placeholder="E-mail" />

                    <input type="password" className="form-control mb-4" placeholder="Password" />

                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <a href="">Forgot password?</a>
                        </div>
                    </div>

                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

                    <p>Not a member?
                    <a href="/signin">Register</a>
                    </p>

                    <p>or sign in with:</p>

                    <a type="button" className="light-blue-text mx-2">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a type="button" className="light-blue-text mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a type="button" className="light-blue-text mx-2">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a type="button" className="light-blue-text mx-2">
                        <i className="fab fa-github"></i>
                    </a>
                </form>
            </div>
        );
    }
}
