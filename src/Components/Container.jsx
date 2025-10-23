import { useState } from "react"

export default function Container(params) {

    // const [Ahmed,funcAhmed]= useState("Hello")
    // function Toggle() {
    //     funcAhmed(prev => prev === "Hello" ? "4444444444" : "Hello")
    // }
    const [Val, setVal] = useState("Mosa")
    function chgVal() {
        setVal(prev => prev === "Mosa" ? "TOS" : "Mosa")
    }
    return (

        <>
        
        <div onClick={chgVal}>
            {Val}
        </div>
        
        </>



    )
    
}