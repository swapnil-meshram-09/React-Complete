import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Product(){
    return(
        <>
        <h4>Product</h4>

        <Link to='/Product/Mens'>Mens</Link>

        <Link to='/Product/Womens'>Womens</Link>



        {/* Route Nesting with Oulet */}
        
        <Outlet />
        
        </>

    )
}

export default Product