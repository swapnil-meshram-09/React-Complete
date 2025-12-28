
// function Props(props) {

//   props.setText('new Text')      // error

//   return (
//     <>
    
//     </>
//   )
// }

// export default Props







function Props(props) {


  console.log(props);

  console.log(props.attribute1);

  console.log(props.attribute1[0]);

  console.log(props.attribute1[1]);



  const data = props.attribute1[1] = 'new Text'

  
  return (
    <>
    
    {/* {props.attribute1[1]} */}

    {data}
    
    </>
  )
}

export default Props