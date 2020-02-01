import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const useApiCall = function (url) {
    const [data, setData] = useState([])

    useEffect(() => {
        // 'https://jsonplaceholder.typicode.com/todos'
        axios.get(url)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
               console.log(err)
      
            })
    }, []);

return data

}
