import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './signin.css';

export default class SignIn extends Component {

    render() {
        return (
            <div className="signin-container">
                <form class="text-center border border-light p-5">

                    <p class="h4 mb-4">Sign up</p>

                    <div class="form-row mb-4">
                        <div class="col">
                            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" />
                        </div>

                        <div class="col">

                            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" />
                        </div>
                    </div>

                    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" />
                    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />

                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                    </small>

                    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                        Optional - for two step authentication
                    </small>

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter" />
                        <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                    </div>

                    <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

                    <p>or sign up with:</p>

                    <a type="button" class="light-blue-text mx-2">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a type="button" class="light-blue-text mx-2">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a type="button" class="light-blue-text mx-2">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a type="button" class="light-blue-text mx-2">
                        <i class="fab fa-github"></i>
                    </a>
                    {/* <hr> */}

                    <p>By clicking </p>
                    <em>Sign up</em> you agree to our
                    <a href="" target="_blank">terms of service</a>

                </form>
            </div>
        );
    }
};
