import './File.css'

function File() {
  return (
    <>
    <div className='style'>File</div>
    <div id='style'>Content</div>

    {/* Connected with App.jsx, affect App <h1> also     */}
    <h1>Heading</h1>               
      
    <h2>Heading</h2>
    </>
  )
}

export default File