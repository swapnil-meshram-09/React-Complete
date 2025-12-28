import Props from './Props'

function Actual(props) {

  const arr = [1,2,3,4]

  const obj = {
    name: 'name',
    age: 20
  }

  return (
    <>

    {/* Props = properties = argument passed to function */}

    {/* Syntax: <Function Component Call attribute='value' /> */}



    {/* import Props from './Props/Top-Down/Props' */}




    {/* <Props string = 'string' number={123} arr={arr} obj={obj} /> */}


    {/* <Props /> */}


    {/* <Props arr={arr} arr2={[1,2,3]} /> */}

    <Props a='a' b='b' c='c' d='d' />


    </>
  )
}

export default Actual
