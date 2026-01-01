function Props(props) {     

  console.log(props.children);
  
  return (
    <>
    
    {props.children} {props.children[0]}    

    </>
  )
}

export default Props






// function Props({children}) {     

//   console.log(children);
  
//   return (
//     <>
    
//     {children} {children[0]}    

//     </>
//   )
// }

// export default Props








// function Props(props) {     // or ({arr2})

//   // console.log(props.children);
  
//   return (
//     <>
    
//     {/* Error  */}
//     {/* {props.children} {props.children[0]} */}    

//     {props.arr2}         
//                   {/*or {arr2} */}

//     </>
//   )
// }

// export default Props