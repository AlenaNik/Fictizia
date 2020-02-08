import React, { Component } from 'react'
import AppContext from './theme-context';

export default class Text extends Component {
    static contextType = AppContext;
    render() {
        return (
            <p>
            {this.context.language === 'es' ? 'Hola' : 'Hello'}
            </p>
        )
    }
}
