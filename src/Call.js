import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Call () {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
           console.log(err)
  
        })
}, []);

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>
            {post.title}
        </li>
      ))}
    </ul>
  );
}
export default Call;