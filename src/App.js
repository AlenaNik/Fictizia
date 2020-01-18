import React, {Component} from 'react'
import './App.css'
import Select from './Select.component'


const fruits = [ {
    id: 1,
    text: 'Grapes'
},
{
    id: 2,
    text: 'Apples'
},
]

const veggies = [ {
    id: 1,
    text: 'Carrot'
},
{
    id: 2,
    text: 'Potato'
},
]

class App extends Component {
  
    render() {
        return (
            <>
               <Select 
               items={fruits}
               onChange={(e) => console.log(e.target.value)}
               />
                 <Select 
               items={veggies}
               onChange={(e) => console.log(e.target.value)}
               />
            </>
        )
    }

}

export default App;
