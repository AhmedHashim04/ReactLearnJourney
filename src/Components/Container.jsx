import { useState } from "react"

export default function Container(params) {

    const [Numb, fumb] = useState("hhh");
    function pack(){

        if (Numb === "hhh")
            fumb("NOo");
        else{
            fumb("hhh");

        }
    }
    return (

        <>
        
        <div
         onClick={pack}
        style={{color:Numb === "hhh"? "red": "gold", fontSize:"80px"}}
        >
            {Numb}
        </div>
        
        </>



    )
    
}