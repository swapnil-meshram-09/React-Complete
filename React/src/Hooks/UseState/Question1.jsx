import { useState } from "react"

function Question1() {

    // const [value, setValue] = useState(1)

    // const [value, setValue] = useState([1,2,3])

    const [value, setValue] = useState({name:'name'})

    console.log('Rendering..');
    

    const increase = () =>{

        // console.log('clicked');      // only 1 rendering at begin of load page
        
        // setValue(1)       // only 1 rendering at begin of load page

        // setValue(5)         // rendering = 3 => 3rd = checking

        //setValue(value+1)

        // setValue([1,2,3])   // different array reference = 2 rendering => 1st =  bydefault, 2 = button clicking

        // setValue({name:'newName'})   // different array reference = 2 rendering => 1st =  bydefault, 2 = button clicking

    }

    return (
    <>
    <div>
        <h5>value: {value}</h5>
        <button onClick={increase}>Increase</button><br />
    </div>
    </>
  )
}

export default Question1