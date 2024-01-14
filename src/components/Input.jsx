import Button from './Button.jsx';
import Todos from './Todos.jsx';
import { useState } from 'react';
const Input = () => {
    const [value, setValue] = useState("");
   
    return <>
        <input
            className="bg-red-500"
            onChange={(e) => setValue(e.target.value)}
        />
        <Button inputValue={value} btn="addtodo"></Button>
       
    </>
}
export default Input;