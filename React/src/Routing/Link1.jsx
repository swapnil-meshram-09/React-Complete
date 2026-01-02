import { Link } from 'react-router-dom'

function Link1(){
    return(
        <>
        {/* Nav Bar */}
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
        <Link to='/Product'>Product</Link>
        </>
    )
}

export default Link1