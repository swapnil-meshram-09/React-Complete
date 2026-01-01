
function InlineCSS() {

  const style = {
    color:'red',
    backgroundColor:'white'
  }

  return (
    <>
    <body style={{backgroundColor:'black',color:'white'}}></body>

    <div style={{backgroundColor:'red',color:'green'}}>Inline CSS</div>

    <h1 style={style}>Heading</h1>
    </>
  )
}

export default InlineCSS