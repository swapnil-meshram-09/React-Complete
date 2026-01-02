import axios from 'axios'

import {useState} from 'react'

const Axios1 = () =>{

    const [data1, setData] = useState()

    const fetching = async() =>{
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    const data = await response.data

    console.log(response);

    console.log(data);

    setData(data.title)

  }

    return(
        <>

        <p>Axios = third party method to call API, manage error and simple installation and setup</p>

        <p>{data1}</p>

        <button type='submit' onClick={fetching}>Submit</button>
        
        </>
    )
}

export default Axios1