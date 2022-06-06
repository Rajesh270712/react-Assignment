import React, { useState } from "react"
import {MoreDetails,ToggleDetails} from "./moreDetails";



const Profile = () =>{
    let [age, setAge] = useState(21);

    function updateAge(value)
    {
        setAge(age +value)
                
    }

    return(
        <div>
            <img style={{width:"300px"}} src="/profile.jpeg" alt="" />
            <h2>Name : Rajesh Digambar Bagul </h2>
            <h2> Age : {age}</h2>
            <button onClick={()=>{updateAge(1)}} >Increase Age</button>
            <button onClick={()=>{updateAge(-1)}} >Decrease Age</button>
            <br />
            
            <MoreDetails  />

        </div>
    )
}

export default Profile