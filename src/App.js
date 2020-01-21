import React, { useState } from 'react'
// import Select from './Select.component'
import styled, { createGlobalStyle, css} from 'styled-components'


const GlobalStyle = createGlobalStyle`
html {
height: 100%;
}
body {
height: 100%;
}
`
const SharedStyles = css`
background: #eee;
height: 40px;
`
const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 20px;

`
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`


const StyledFormButton = styled.button`
display: block;
padding: 10px 20px;
background: black;
border-radius: 5px;
color: white;
`


const StyledFieldSet = styled.fieldset`
padding: 10px;
margin: 20px;
legend {
padding: 0 10px;
}

`
const StyledInput = styled.input`
display: block;
width: 100%;
${SharedStyles}
`

const StyledError = styled.fieldset`
color: red;
`

const StyledTextArea = styled.textarea`
background: #eee;
width: 100%;
min-height: 100px;
resize: none;
${SharedStyles}
`
const App = () => {
    return (
        <>
            <GlobalStyle/>
            <StyledFormWrapper>
                <StyledForm>
                    <h2>Contact Form</h2>
                    <label htmlFor="name">Name</label>
                    <StyledInput
                    type="text"
                    name="name"
                    />
                    <label htmlFor="">Email</label>
                    <StyledInput
                    type="email"
                    name="email"
                    />
                    <StyledFieldSet>
                        <legend>
                            Gender
                        </legend>
                        <label>
                            <input type="radio"
                                value="female"
                                name="gender"
                            />
                            Female
                        </label>
                        <label>
                            <input type="radio"
                                   value="male"
                                   name="gender"
                            />
                            Male
                        </label>
                    </StyledFieldSet>
                    <label htmlFor="message">
                        Message
                    </label>
                    <StyledTextArea name="message">
                    </StyledTextArea>
                    <StyledError>
                        <p>Error Message Here</p>
                    </StyledError>
                    <StyledFormButton type="submit">Send Message</StyledFormButton>
                </StyledForm>

            </StyledFormWrapper>
        </>
    )

}
export default App;
