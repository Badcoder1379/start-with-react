import React, { Component } from 'react'
import './product.css'
import Product from './product'

export default class Productslist extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        return (
            <div >
                <div className='product-container'>
                    <div>
                        <Product title='product 1' description='desc of product 1' />
                    </div>

                    <div>
                        <Product title='product 2' />
                    </div>
                </div>

                <button onClick={this.handleClick} className='button'>
                    {this.state.counter}
                </button>
            </div>
        )
    }
}
