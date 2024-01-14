import { useEffect } from "react";
import Button from "./Button.jsx";
const Todos = ({ list, onDelete, onUdate }) => {
   useEffect(()=>{
//    console.log(onDelete);
//     console.log(onUdate);
   },[list])
   const deleted = ()=>{
               console.log("deletd") 
            }
            return (
                <>
            {
                list.map((value, index) => (
                    <div key={index}>
                    <div key={index} >{value}</div>
                    <Button key={index + 1} btn="delete" onClick={() => deleted} />
                    </div>
                    )
                )
            }
</>
    )
}
export default Todos;