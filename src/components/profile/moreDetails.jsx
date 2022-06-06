import React from "react";

let toggle= true;
const ToggleDetails = () =>{
    if(toggle){
        toggle=false
        document.querySelector(".hide").style.display="none"
    }
    else
    {
        toggle=true
        document.querySelector(".hide").style.display="block"
    }
    // (toggle) ? toggle=false  document.querySelector(".hide").style.display="none" : toggle=true ;
    
    
    console.log(toggle);
}

let flag="block";


let MoreDetails= () =>{
    return (
        <>
        {/* <button onClick={ToggleDetails} > Show More Details </button> */}
        <button onClick={ToggleDetails} > Show More Details </button>
      
        <div className="hide" style={toggle===false ? {display:"none"} : {display:"block"} }>
            <h2>Location : Nasik</h2>
            <h2>Organization : Masai School</h2>
        </div>

     
       </>
    )
}

export  {MoreDetails,ToggleDetails};