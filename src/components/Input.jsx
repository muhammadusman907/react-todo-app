import Button from './Button.jsx';
import Todos from './Todos.jsx';
import { useState } from 'react';
const deletes = () => {
    console.log("deleted");
}
const Input = ({...props}) => {
    // console.log(todo);
    return <>

        <input
            {...props}
        />

        

    </>
}
export default Input;