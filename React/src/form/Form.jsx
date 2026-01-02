import { useState } from 'react'

function Form(){

    const [title, setTitle] = useState('')

    return(
        <>
        <form action="" onSubmit={(e)=>{
            e.preventDefault()
            setTitle('')
        }}>

            <input type="text" placeholder="enter" value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} />
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
        
        </>
    )
}

export default Form