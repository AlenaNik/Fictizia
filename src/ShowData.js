import React from 'react';


export default () => 

<span>
    {new Date().toJSON().slice(0,10).replace(/-/g,'/')}
</span>