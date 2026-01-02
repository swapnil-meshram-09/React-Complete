import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

import NotFound from './Pages/NotFound'

import Product from './Pages/Product'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'

function Route1(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />



            {/* Route Nesting without Oulet */}

            {/* <Route path='/Product' element={<Product />}/>

                <Route path='/Product/Mens' element={<Mens/>}/>

                <Route path='/Product/Womens' element={<Womens/>}/> */}





            {/* Route Nesting with Oulet */}
            
             <Route path='/Product' element={<Product />} >

                <Route path='/Product/Mens' element={<Mens/>}/>

                <Route path='/Product/Womens' element={<Womens/>}/>

            </Route>
            
  
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </>
    )
}
export default Route1