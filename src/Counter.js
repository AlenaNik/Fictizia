import React, { Component } from 'react'

class Counter extends Component {
    state = {
        str: ''
    }

    increment() {
        this.setState(state => ({
            str: state.str + 'a'
        }))
    }
    decrement() {
        this.setState(state => ({
            
            str: state.str.substring(0, state.str.length - 1)
        }))
    }

    render() {
        return (
           <>
            <div>{this.state.str}</div>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
           </>
        )
    }
}

export default Counter
