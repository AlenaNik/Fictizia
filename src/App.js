import React, {Component} from 'react';
import './App.css';
import './Users';
import axios from 'axios';



class App extends Component {
    state = {
        show: false,
        item: [],
        newInput: null
    }

    getData = () => {
        let url = 'https://jsonplaceholder.typicode.com/todos/1'
        axios.get(url)
            .then(res => {
                const item = res.data;
                this.setState({ item })
                this.showComponent()
            })
            .catch(err => console.log(err, 'its been an error'))
    }

    showComponent = () => {
        this.setState({show: !this.state.show})
    }

    handleNameChange = e => {
        this.setState({ newInput: e.target.value.trim()})
    }


    render() {
        return (
            <>
                { this.state.show ? <h1>{this.state.item.id}</h1> : '' }
                    <button onClick={this.getData}> Show
                </button>
                <div>
                    name: 
                    <input
                    onChange={this.handleNameChange}
                    value={this.newInput}/>
                </div>
                <select>
                    <option value={this.newInput}>{this.state.newInput}</option>
                </select>
            

            </>
        )
    }

}

export default App;
