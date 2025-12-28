import Props from './Props'

import {useState} from 'react'

function Actual() {
    
    const [text, setText] = useState('')

  return (
    <>

    {/* <Props text={text} setText={setText}/> */}      {/* // error  */}

    <Props attribute1 = {[text, setText]} />

    
    </>
  )
}

export default Actual