// import { Button } from "antd";
import { useState } from "react";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import Todos from "./components/Todos.jsx";
import Mycalender from "./components/calender.jsx";
function App() {
  
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  console.log(todo);
  const editTodo = (index) =>{

       setTodo([...todo] , todo[index].button=false)
  }
  const deleteTodo = (index) => {
    console.log("hello");
    //========================= deletet todo array splice 
    todo.splice(index, 1)
    console.log(todo)
    setTodo([...todo])
  }
  //================================== Update todos
  const updateTodo = (index) => {
    todo.splice(index, 1,  "usamn");
    setTodo([{value : todo}])
    console.log(todo);
  }
  return (
    <>
      <div className="w-[100%] border-2 flex justify-center flex-col" >

        <div className="flex justify-center">
          <div className="w-[80%]">
            <Input className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setValue(e.target.value)} />
          </div>

          <Button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            btnText="addtodo"
            onClick={() => {
              setTodo([...todo, {value , button:true}])
            }}
          ></Button>
        </div>

        <Todos list={todo} deleteTodos={deleteTodo}
          updateTodos={updateTodo} 
          editTodos={editTodo}
        />
      </div>
    </>
  )
}

export default App;
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20