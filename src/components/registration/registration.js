import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            password_confirmation: ""
        }
        this.handlesubmsit = this.handlesubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("changed!");

        this.setState({
            [event.target.name]: event.target.value
        });
        event.preventDefault();
    }

    handlesubmit(event) {
        console.log("registration was success!");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type='email'
                        name='email' placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <input type='password'
                        name='password'
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <input type='password'
                        name='password'
                        placeholder="Password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    ></input>

                    <button type="submit">
                        Register
                    </button>


                </form>
                <button onClick={this.handlesubmit}>
                    free button
                </button>
            </div>

        );
    }
}