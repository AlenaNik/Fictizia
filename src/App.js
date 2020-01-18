import React, {Component} from 'react'
import './App.css'
// import Select from './Select.component'
//
//
// const fruits = [ {
//     id: 1,
//     text: 'Grapes'
// },
// {
//     id: 2,
//     text: 'Apples'
// },
// ]
//
// const veggies = [ {
//     id: 1,
//     text: 'Carrot'
// },
// {
//     id: 2,
//     text: 'Potato'
// },
// ]

class App extends Component {
state = {
    name: '',
    age: '',
    surname: '',
    value: '',
    isGoing: true,
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
                    <label className="text-indigo-500 text-sm font-bold mb-4">
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
                    <label className="text-indigo-500 text-sm font-bold mb-4">
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
                    <label className="text-indigo-700 text-sm font-bold mb-4">
                        Age:
                    <input className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    </label>
                    <br />

                    <input
                        className="mb-4"
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                    <br />

                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-grey-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Submit"/>
                </form>



               {/*<Select */}
               {/*items={fruits}*/}
               {/*onChange={(e) => console.log(e.target.value)}*/}
               {/*/>*/}
               {/*  <Select */}
               {/*items={veggies}*/}
               {/*onChange={(e) => console.log(e.target.value)}*/}
               {/*/>*/}
            </>
        )
    }

}

export default App;
