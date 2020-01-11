import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1 
        }))
    }
    decrement() {
        this.setState(state => ({
            count: state.count -1 
        }))
    }

    render() {
        return (
           <>
            <div>{this.state.count}</div>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
           </>
        )
    }
}

export default Counter
