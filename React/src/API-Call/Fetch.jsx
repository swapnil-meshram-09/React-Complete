import {useState} from 'react'

function Fetch(){

    const [data1, setData] = useState()

    const fetching = async ()=>{

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json()

        console.log(response);

        console.log(data);

        setData(data.title)
    }

    return(
        <>
        <p>Fetching Data using fetch method to call API.</p>

        <p>{data1}</p>

        <button type='submit' onClick={fetching}>Submit</button>
        
        </>
    )
}

export default Fetch