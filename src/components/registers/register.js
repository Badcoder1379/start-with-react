import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div>first name:
                    {this.props.firstname}
                </div>

                <div>last name:
                    {this.props.lastname}
                </div>

                <div>age:
                    {this.props.age}
                </div>

                <div>job:
                    {this.props.job}
                </div>
            </div>
        )
    }

}