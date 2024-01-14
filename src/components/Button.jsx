import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";

const Button = ({ inputValue, btn }) => {
    // console.log(btn);
    const [todo, setTodo] = useState([]);
    const deleteTodo = (index) => {
        console.log("hello");
        //========================= deletet todo array splice 
        todo.splice(index, 1)
        console.log(todo)
        setTodo([...todo])
    }
    const updateTodo = (index) => {
        todo.splice(index, 1, "usman");
        console.log(todo);
        setTodo([...todo])
    }
    useEffect(() => {
        // console.log(todo);
    }, [todo])
    return <>
        <button className="bg-green-500" onClick={() =>{
            console.log("hello");
            setTodo([...todo, inputValue])} }>{btn}</button>
        <Todos list={todo}
            onUdate={(index) => updateTodo(index)}
            onDelete={(index) => deleteTodo(index)}
        />
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
export default Button; 