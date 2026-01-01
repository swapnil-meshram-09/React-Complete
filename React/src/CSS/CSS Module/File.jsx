import style from './File.module.css'
import {colors2} from './File.module.css'

function File() {
  return (
    <>
    <div className={style.bg}>File</div>

    <div id={style.colors}>Content</div>

    <div id={colors2}>Content 2</div>

        
    {/* Connected with App.jsx, affect App <h1> also     */}

    <h1>heading</h1>

    <h2>heading</h2>


    </>
  )
}

export default File