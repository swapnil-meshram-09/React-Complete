import Props2 from './Props2'

// function Props(props){
//     return(
//         <>
//         {props.string}

//         {props.number}

//         {props.arr[0]}

//         {props.obj.name}

//         </>
//     )
// }

// export default Props






// function Props({number1,number2=321,number3}){

//     number3 = 4321

//     return(
//         <>

//         {number1=123}{number2}{number3}
//         </>
//     )
// }

// export default Props





// function Props({arr, arr2}) {
//   return (
//     <>

//     {arr} {arr2}
    
//     </>
//   )
// }

// export default Props





function Props({a,b, ...rest}) {

    console.log(rest);        // object = {c , d}
    
  return (
    <>

    {a} 
    
    {b}

    {rest.c} {rest.d}



    <Props2 a={a} b={b} />
    </>
  )
}

export default Props