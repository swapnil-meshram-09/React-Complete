import { createContext } from 'react'

export const context1 = createContext()

export const context2 = createContext()
 
function Context(props){
    return(
        <>

        <context1.Provider value='string or 123 or [7,8,9]'>

            {props.children}

        </context1.Provider>




        {/* nested way to pass multiple values  */}

        {/* <context1.Provider value='string'>
            <context2.Provider value={123}>

            {props.children}

            </context2.Provider>
        </context1.Provider> */}



     
        
        {/*  error => value={{name:'name'}}   */}





        {/*  copy of <App /> with 123  */}

        {/* <context2.Provider value={123}>

            {props.children}

        </context2.Provider> */}
        
        </>
    )
}

export default Context