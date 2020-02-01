import React, { useState, useEffect } from 'react'; 

const Form = () => {  
const [input, setInput] = useState("")

useEffect(() => {
    return () => {
        console.log('will unmount');
    }
  }, []);

const replaceLetter = (e) => {
    const inputthing = e.target.value
    setInput(inputthing.replace('a', 'b'))
}

return (        
    <form>            
       <input
          type="text"
          value={input}
          onChange={replaceLetter}
        />
    </form>   
  );
};
export default Form;