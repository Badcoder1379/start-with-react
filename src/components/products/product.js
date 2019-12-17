import React, { Component } from 'react'

export default class product extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.title}
                </div>

                <div>
                    {this.props.description}
                </div>
                
            </div>
        )
    }
}
