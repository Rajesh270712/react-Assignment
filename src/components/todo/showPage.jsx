import React from "react";


const Show = (props) =>{
            console.log(props)
          let   {title, status} =props
    return (
        <>
            <h2 style={(status? {color:"green"} : {color:"red"})} >{title}</h2>
            
        </>
        
    )
}

export default Show;