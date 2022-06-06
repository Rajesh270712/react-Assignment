import React from "react";

let toggle= true;
const ToggleDetails = () =>{
    (toggle) ? toggle=false : toggle=true ;
    MoreDetails()
    console.log(toggle);
}


let MoreDetails= () =>{
    return (
       <>
       <div>

       </div>
         <button onClick={ToggleDetails} >Show More Details</button>
        <div style={toggle==false ? {display:"none"} : {display:"block"} }>
            <h2>Location : Nasik</h2>
            <h2>Organization : Masai School</h2>
        </div>
       </>
    )
}

export  {MoreDetails,ToggleDetails};