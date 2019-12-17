import React, { Component } from 'react'
export default class register extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.firstname}
                </div>

                <div>
                    {this.props.lastname}
                </div>

                <div>
                    {this.props.age}
                </div>

                <div>
                    {this.props.job}
                </div>

                <div>
                    {this.props.job}
                </div>

            </div>
        )
    }

}