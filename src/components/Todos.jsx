import { useEffect, useState } from "react";
import Button from "./Button.jsx";
const Todos = ({ list, deleteTodos ,updateTodos,editTodos}) => {

    return (
        <>
            {
                list.map((value, index) => (
                    <div key={index} className="border-t first:border-t-0 w-[80%]" >
                        <div className="flex justify-between mt-3">{value.value}
                        <div> <Button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" btnText="delete" onClick={deleteTodos} />
                           { value.button ? <Button 
                                btnText="edit"
                                className="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                 onClick={()=>
                                    editTodos(index)
                                }/>
                             :<Button
                                className="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" btnText="Update" onClick={updateTodos} />
                               
                                }
                         </div>
                           
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}
export default Todos;
//  18 lesson 17 topic 