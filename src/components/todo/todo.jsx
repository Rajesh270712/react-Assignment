import React from "react";
import Show from "./showPage.jsx"


const ShowTodo = () =>{

    
let data =[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat Maggie", status: true },
    { id: 4, title: "sleep", status: false }
  ]

            let [task,setTask] = React.useState([])

            function updateTask(){
                setTask(...task,)
            }

    return (
        <div>
            
            <h1>TODO List</h1>
            {/* <input type="text" onChange={updateTask} />
            <input type="checkbox" />
            <button onClick={updateTask} >Add</button> */}
            {
            data.map((item)=>(
                <Show {...item} key={item.id}/>
               
            ))
            }
        </div>
        
    )
}

export default ShowTodo;