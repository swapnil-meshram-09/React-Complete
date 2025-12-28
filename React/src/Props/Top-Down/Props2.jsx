import Props3 from "./Props3"

function Props2(props) {

    const str = '\nPass\n'
    
  return (
    <>

    {str}

    {props.a} {props.b}

    <Props3 a={props.a} b={props.b}/>
    
    </>
  )
}

export default Props2