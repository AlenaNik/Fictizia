import React from 'react'
import styled, { css } from 'styled-components'

const WrapperButton = styled.button`
  

  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  ${props => props.normal && css`
    background: pink;
    color: palevioletred;
  `}
  ${props => props.success && css`
    background: lightgreen;
    color: green;
    border: 2px solid green;
  `}
  ${props => props.warning && css`
    background: white;
    color: orange;
    border: 2px solid orange;
  `}

`;

export default WrapperButton