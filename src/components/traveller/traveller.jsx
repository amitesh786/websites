import React, { Component } from 'react';
import './traveller.css';

export default class Traveller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-traveller">
                <h1 className="logo-txt">Anna. PacknTag. Love</h1>

                <div className="container-fluid">
                    <p className="txt-contain">The pleasure of delivering, without the hassle of deliver</p>

                    <div className="">
                        <form className="form-inline" onSubmit={this.handleSubmit} >
                            
                            <input type="text" className="form-control" id="departure" value={this.state.value} onChange={this.handleChange} />
                            
                            <input type="text" className="form-control" id="arrival" value={this.state.value} onChange={this.handleChange} />
                            
                            <input type="text" className="form-control" id="date" value={this.state.value} onChange={this.handleChange} />
                            <button type="submit" className="btn btn-primary">Find a traveller</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
