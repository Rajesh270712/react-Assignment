import React from "react";


    
    
    
    
    let MoreDetails= () =>{
    const displayHide= "none" 
    const displayShow= "block" 
    const [display, setDisplay] =React.useState(displayHide)

    function displayToggle(){
         (display===displayHide) ?  setDisplay(displayShow) : setDisplay(displayHide)
        
        
    }
    return (
        <>
       


        <button onClick={displayToggle} >  {(display===displayHide ? `Show` : `Hide`) }  More Details </button>
      
        <div style={{display:display}} >
            <h2>Location : Nasik</h2>
            <h2>Organization : Masai School</h2>
        </div>

     
       </>
    )
}

export  default MoreDetails