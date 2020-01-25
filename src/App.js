import React, {Component} from 'react'
import './App.css'
import Input from './Input'
import Text from './Text'

class App extends Component {
state = {
    color: '#c9c9c9',
}

handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
        color: e.target.value,
    })
}


    render() {
        const { color } = this.state
        return (
            <>
                <form className="px-8 pt-6 pb-8 mb-4">
                    Color: 
                    <div>
                    <Text color={color}>lo que sea</Text>
                    <Input
                    className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                    />
                       </div>
                </form>
            </>
        )
    }

}

export default App;
