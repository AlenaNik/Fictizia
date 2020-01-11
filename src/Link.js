import React from 'react';


export default (props) => 
<a href={props.link} target={props.openNewTab ? '_blank' : ''}>This is a link item</a>