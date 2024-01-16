import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";

const Button = ({ todos, btnText , ...props} ) => {
    // console.log(todos);










    
    // console.log(btnText);
    // const deleteTodo = (index) => {
    //     console.log("hello");
    //     //========================= deletet todo array splice 
    //     todo.splice(index, 1)
    //     console.log(todo)
    //     setTodo([...todo])
    // }
    return <>
        <button 
            {...props}
             >{btnText}</button>

        {/* <Todos list={todos}
            onUdate={(index) => updateTodo(index)}
            onDelete={(index) => deleteTodo(index)}
        /> */}
        {/* {todo.map((value, index) => {
            return (
                <>
                    <div key={index}>
                        {value}<button className="bg-red-400"
                            onClick={() => upadateTodo(index)}
                        >update</button>
                        <button className="bg-blue-700"
                            onClick={() => deleteTodo(index)}>delete</button>
                    </div>
                </>
            )
        })} */}
    </>
}
// export const Buttons = (...props) =>{
//     console.log(props);
//           return <button >{props.btnName}</button>
// }
export default Button; 