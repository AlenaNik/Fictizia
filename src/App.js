import React, {Component} from 'react'
import './App.css'
import Input from './Input'

class App extends Component {
state = {
    color: '',
}

handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
        color: e.target.value,
    })
}


    render() {
        return (
            <>
                <form className="px-8 pt-6 pb-8 mb-4">
                    <label className="text-black text-sm font-bold mb-4">
                    Color: 
                    <p> I'm here {this.state.color}</p>
                        <Input
                        className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="color"
                        value="#ffffff"
                        onChange={this.handleChange}
                        />

                    </label>

                </form>
            </>
        )
    }

}

export default App;
