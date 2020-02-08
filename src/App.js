import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Call from './Call';
import styled from 'styled-components'
import Alert from './Alert'

const WrapperButton = styled.button`
  padding: 2em 2em;
  background: cornflowerblue;
`;


function App() {
    const  [show, setShow] = useState(true)

const toggleComponent = () => {
    setShow(!show)
}
  return (
      <>
    <div className="App"> 
    <Alert>0 mensajes nuevos</Alert>
        <WrapperButton onClick={toggleComponent}> ✨ Magic button </WrapperButton>
     {show && <Form />}
    </div>
    <Call/>
     </>
  );
}

export default App;
