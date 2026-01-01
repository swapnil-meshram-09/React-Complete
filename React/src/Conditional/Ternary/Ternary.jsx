// import File1 from './File1'
// import File2 from './File2'

// function Ternary({value}){

//     const result = value ? <File1 /> : <File2 />

//     return(
//         <>
//         {result}
//         </>
//     )
// }

// export default Ternary



import File1 from './File1'
import File2 from './File2'

function Ternary(props) {
  return (
    <>

    {props.value ? <File1 /> : <File2 />}
    
    </>
  )
}

export default Ternary
