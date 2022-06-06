import React from "react";
import Show from "./showPage.jsx"


const ShowTodo = () =>{

    
let data =[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat Maggie", status: true },
    { id: 4, title: "sleep", status: false }
]

            let [query, setTask] = React.useState("")
            let [task,  addTask] =React.useState([]);

            function updateQuery(event){
                setTask(event.target.value)

            }

            function updateTask(){

                console.log(query)
                let payload={
                    title:query,
                    status:false
                }
                data.push(payload);
                let newTask=[[...task,payload]]
                addTask(newTask)

            }

          

    return (
        <div>
            
            <h1>TODO List</h1>
             <input type="text" placeholder="Add Task" onChange={updateQuery} />
            <input type="checkbox" />
            <button onClick={updateTask} >Add</button> 


            {
            data.map((item)=>(
                <Show {...item} key={item.id}/>
               
            ))
            }
        </div>
        
    )
}

export default ShowTodo;
