import React, { useState, useEffect } from 'react'; 




const Form = () => {  

    const notificationStyle = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16
    }

    const [ nombre, setNombre ] = useState('')
    const [ showError, setShowError ] = useState(false)

    useEffect(() => {
        if (nombre == 'zamarro') {
            setShowError(true) 
        } else {
        setShowError (false) 
        }
    }, [nombre])

    return (        
        <form>            
        <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
            { !showError && <span>error</span> } 
        </form>   
    );
};
export default Form;