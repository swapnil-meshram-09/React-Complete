import File1 from "./File1"
import File2 from "./File2"

function If(props){

    const value = props.value

    if(value){
        return(
           <>
             <File1 />
           </>
       )
    }else {
       return(
         <>
           <File2 />
          </>
       )
    }
}

export default If
