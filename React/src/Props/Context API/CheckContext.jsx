import { useContext } from 'react'

import { context1, context2 } from './Context'

function CheckContext(){

    const data = useContext(context1);

    const data2 = useContext(context2);

    console.log(data);

    console.log(data2);
    
    return(
        <>

        {data} {data2}
        
        </>
    )
}
export default CheckContext