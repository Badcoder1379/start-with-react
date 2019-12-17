import React, { Component } from 'react'
import Register from './register'
import './register.css'

export default class Registerlist extends Component {
    constructor(props) {
        super(props)
        this.state = { color: this.getRandomColor() }
        this.handleClick = this.handleClick.bind(this)

    }



    handleClick(e) {
        e.preventDefault()
        this.setState({
            color: this.getRandomColor()
        });

    }


    render() {
        return (
            <div >
                <div className='register-container'>
                    <div>
                        <Register firstname='mohammad' lastname='heidary' age='10' job='student' />
                    </div>
                </div>
                < button style={{ background: this.state.color }} onClick={this.handleClick} className='button'>
                    {this.state.color}
                </button >
            </div>
        )
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
