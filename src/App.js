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
    message: '',
    checked: false,
    gender: '',
    error: '',
    countryId: 1
}

handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value,
        gender: e.target.value,
        message: e.target.value,
        checked: !this.state.checked,
    })
}


handleSubmit = (e) => {
    e.preventDefault()
    alert('A form was submitted')
}

onEnterPress = (e) => {
    // if(e.keyCode == 13 )
}

handleCountry = e => {
    this.setState({ countryId: e.target.value })
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
                    <input className="shadow appearance-none border rounded py-2 px-1 m-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        onChange={this.handleChange}
                        defaultChecked={this.state.checked}
                    />
                    <br />
                    Football:
                    <input
                        className="mb-4"
                        name="Football"
                        type="checkbox"
                        onChange={this.handleChange}
                        defaultChecked={this.state.checked}
                    />
                    <br />
                    Basketball:
                    <input
                        className="mb-4"
                        name="Basketball"
                        type="checkbox"
                        onChange={this.handleChange}
                        defaultChecked={this.state.checked}
                    />
                    <br />
                    Art:
                    <input
                        className="mb-4"
                        name="Art"
                        type="checkbox"
                        onChange={this.handleChange}
                        defaultChecked={this.state.checked}
                    />
                    <br />

                    <textarea
                        name="textfield"
                        value={this.state.message}
                        onChange={this.handleChange}
                        className="bg-gray-200"
                        placeholder="description"
                    />
                    <br />


                   <div className="radio">
                       <legend>Gender</legend>
                    <label>
                        <input type="radio"
                               value="female"
                               defaultChecked={true}
                               checked={this.state.gender === 'female'}
                               onChange={this.handleChange}
                        />
                        Female
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio"
                               value="male"
                               checked={this.state.gender === 'male'}
                               onChange={this.handleChange}
                        />
                        Male
                    </label>
                </div>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                   value="neutral"
                                   checked={this.state.gender === 'neutral'}
                                   onChange={this.handleChange}

                            />
                            Gender-neutral
                        </label>
                    </div>
                <div className="radio">
                    <label>
                        <input type="radio"
                               value="notprovided"
                               checked={this.state.gender === 'no-provided'}
                               onChange={this.handleChange}
                        />
                        Prefer not to say
                    </label>
                </div>
                <br/>

                    <Select
                        items={countries}
                        onChange={this.handleCountry}
                    />
                    <Select
                        items={province}
                        value={this.state.countryId}
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <br />
                    <input
                        className="bg-black hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Submit"/>

                </form>
            </>
        )
    }

}

export default App;
