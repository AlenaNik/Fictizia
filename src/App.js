import React from 'react';
import './App.css';
import Title from './Title';
import Text from './Text';
import List from './List';
import Link from './Link';
import Loading from './Loading';



function App() {
  return (
    <div className="App"> 
    <Loading show={true}>
      <Title title="Necesito partir en componentes todo esto"/>
      <Text text="Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:"/>
      <List />
      <Link openNewTab={true} link="https://reactjs.org/"/>
    </Loading>
    </div>
  );
}

export default App;
