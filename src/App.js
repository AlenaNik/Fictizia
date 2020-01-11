import React from 'react';
import './App.css';
import Greetings from './Greetings';
import ShowName from './ShowName';
import ShowMessage from './ShowMessage';
import ConditionalRender from './ConditionalRender';

function App() {

  const user = { name: 'Sergio'}

  return (
    <div className="App">
      <Greetings/>
      <ShowName name={user.name}/>
      <ShowMessage/>
      <ConditionalRender/>
      </div>
    
  );
}

export default App;
