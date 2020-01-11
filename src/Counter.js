import React, { Component } from 'react'
import Button from './Button'

class Counter extends Component {
    state = {
        str: ''
    }

    increment = () => { this.setState(state => ({ str: state.str + 'a '}))
}
    decrement = () =>  { this.setState(state => ({ str: state.str.substring(0, state.str.length - 1) })) 
}

    render() {
        return (
           <>
            <div>{this.state.str}</div>
            <Button onClick={this.increment}>Increment</Button>
            <Button onClick={this.decrement}>Decrement</Button>
           </>
        )
    }
}

export default Counter
