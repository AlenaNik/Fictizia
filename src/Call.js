import React, { useState, useEffect } from 'react'
import { useApiCall } from './useApiCall';

function Call () {

  // componentDidMount 

const data = useApiCall('https://jsonplaceholder.typicode.com/todos')

  return (
    <ul>
      {data && data.map(post => (
        <li key={post.id}>
            {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Call;