import React, { useState, useEffect } from 'react'
import { useApiCall } from './useApiCall';
import Alert from './Alert'

function Call () {

  // componentDidMount 

const data = useApiCall('https://jsonplaceholder.typicode.com/todos')

  return (
    <Alert>
      {data && data.map(post => (
        <li key={post.id}>
            {post.title}
        </li>
      ))}
    </Alert>
  );
}

export default Call;