import React from 'react';


const message = 'Ahora puedes leer esto';
const showMessage = true;

const ShowMessage = () => 
    <p>{showMessage ? message : 'no puedes'}</p>


export default ShowMessage;