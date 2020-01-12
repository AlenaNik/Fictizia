import React, {Component} from 'react';
import './App.css';
import './Users';
import Users from "./Users";
import Task from "./Task";


class App extends Component {
    state = {
        show: false
    }

    toggleComponent = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <>
                { this.state.show ? <Users/> : '' }
            <button onClick={this.toggleComponent}> Toggle
            </button>
                <Task/>
            </>
        )
    }

}

export default App;
