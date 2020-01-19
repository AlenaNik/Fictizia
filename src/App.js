import React, {Component} from 'react'
import './App.css'
import Select from './Select.component'

const countries = [ {
    id: 1,
    text: 'Spain'
},
{
    id: 2,
    text: 'USA'
},
]

const province = [ {
    id: 1,
    text: 'Guadalajara, Madrid'
},
    {
        id: 2,
        text: 'Boston, Massachusetts'
    },
]

class App extends Component {
state = {
    name: '',
    age: '',
    surname: '',
    value: '',
    isGoing: true,
    isChecked: true
}

handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
        [name]: value
    })
}
handleSubmit = (e) => {
    alert('A form was submitted')
    e.preventDefault()
}
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="px-8 pt-6 pb-8 mb-4">
                    <label className="text-black text-sm font-bold mb-4">
                        Name:
                    <input
                    className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                    />
                    </label>
                    <label className="text-black text-sm font-bold mb-4">
                        Surname:
                        <input
                            className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="surname"
                            value={this.state.surname}
                            onChange={this.handleChange}
                            placeholder="Surname"
                        />
                    </label>
                    <br />
                    <label className="text-black text-sm font-bold mb-4">
                        Age:
                    <input className="shadow appearance-none border rounded py-2 px-2 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    </label>
                    <br />
                    Games:
                    <input
                        className="mb-4"
                        name="Games"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                    <br />
                    Football:
                    <input
                        className="mb-4"
                        name="Football"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                    <br />
                    Basketball:
                    <input
                        className="mb-4"
                        name="Basketball"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                    <br />
                    Art:
                    <input
                        className="mb-4"
                        name="Art"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                    <br />

                    <textarea
                        className="bg-gray-200"
                        placeholder="description"
                        value={this.state.value} onChange={this.handleChange} />
                    <br />


                   <div className="radio">
                    <label>
                        <input type="radio" value="option1"
                               checked={this.state.isChecked}
                               onChange={this.handleChange}
                        />
                        Option 1
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2"
                               checked={!this.state.isChecked}
                               onChange={this.handleChange}
                        />
                        Option 2
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option3"
                               checked={!this.state.isChecked}
                               onChange={this.handleChange}
                        />
                        Option 3
                    </label>
                </div>
                <br/>

                    <Select
                        items={countries}
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <Select
                        items={province}
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <br />
                    <input
                        className="bg-black hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Submit"/>

                </form>

               {/*  <Select */}
               {/*items={veggies}*/}
               {/*onChange={(e) => console.log(e.target.value)}*/}
               {/*/>*/}
            </>
        )
    }

}

export default App;
