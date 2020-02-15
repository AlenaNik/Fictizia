import React, {useRef, useState} from 'react'
import { FromContainer } from './Styles'
import { withRouter } from 'react-router-dom'

const Login = (props) => {

const nameRef = useRef()
const passwordRef = useRef()
const [error, setError]  = useState(false)

const sendForm = (e) => {
    e.preventDefault();
    const name  = nameRef.current.value;
    const pass = passwordRef.current.value;
    if (name === "react" && pass === "fictizia") {
            setError(false)
            props.history.push('/posts')
    } else {
        setError(true)
    
    }
}

    return(
        <FromContainer onSubmit={sendForm}  >
            <input type="text" ref={nameRef}/>
            <input type="password" ref={passwordRef}/>
            <input type="submit" value="Login"/>
            { error && 
            <div>Usuario no reconocido</div> 
            }
        </FromContainer>
    )
}

export default withRouter(Login);