
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Call from './Call';


function App() {
    const  [show, setShow] = useState(true)

const toggleComponent = () => {
    setShow(!show)
}
  return (
      <>
    <div className="App"> 
        <button onClick={toggleComponent}>Show</button>
     {show && <Form />}
    </div>
    <Call/>
     </>
  );
}

export default App;
