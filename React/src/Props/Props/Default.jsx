                            // not execute 
// function Default(value = 'default_value') {
//   return (
//     <>
//     <h5>{value}</h5>
//     </>
//   )
// }

// export default Default




function Default({value = 'default_value1'}) {
  return (
    <>
    <h5>{value}</h5>
    </>
  )
}

export default Default



export function Default2({attribute,value='default_value2'}){
    return(
        <>
        <h5>{value}</h5>
        </>
    )
}