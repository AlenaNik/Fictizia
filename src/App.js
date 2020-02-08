import React, {useState, useEffect} from 'react';
import './App.css';
import Alert from './Alert'
import WrapperButton from './WrapperButton'


function App() {
  
  return (
      <>
    <div className="App"> 
        <WrapperButton normal> ✨ Default </WrapperButton>
        <WrapperButton success> ✨ Success </WrapperButton>
        <WrapperButton warning> ✨ Warning </WrapperButton>
        <WrapperButton> ✨ Error </WrapperButton>
        <WrapperButton> ✨ Info </WrapperButton>
    </div>
     </>
  );
}

export default App;
