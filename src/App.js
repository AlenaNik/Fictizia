import React from 'react';
import './App.css';
import Title from './Title';
import Text from './Text';
import List from './List';
import Link from './Link';




const ShowMessage = props => 
<p>{props.message}</p>


function App() {
  return (
    <div className="App">
    <Title title='Necesito partir en componentes todo esto'/>
    <Text text='Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:'/>
    <List />
    <Link link="https://reactjs.org/"/>
    </div>
    
  );
}

export default App;
