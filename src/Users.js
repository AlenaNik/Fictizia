import React, { Component } from 'react';

export default class Users extends Component {
    state = {
        users: ['alena ', 'jaime ']
        }

    componentDidMount() {
        let newusers = [...this.state.users]
        newusers.push('alguien')
        this.setState({ newusers })
    }
   componentWillUnmount() {
        console.log('me descrtuyo')
   }

    render() {
        return (
            <>
                <p>{this.state.newusers}</p>

            </>
        )
    }
}
