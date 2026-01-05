import { useState } from "react"

function UseState() {

    const [value, setValue] = useState(1)

    const increase = () =>{
        setValue(value+1)   
    }
    
    const decrease = () =>{
        if(value > 0){
            setValue(value-1)
        } 
    }

    return (
    <>
    <div>
        <h5>value: {value}</h5>
        <button onClick={increase}>Increase</button><br />
        <button onClick={decrease}>Decrease</button>
    </div>
    </>
  )
}

export default UseState