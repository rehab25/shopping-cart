import React from 'react'
import Cart from '../Components/Cart/Cart'
import Filter from '../Components/Filter/Filter'
import Products from '../Components/Products/Products'

export default function Home() {
  return (
    <>
    <div className='container'>
            <div className='row'>
                  <div className='col-lg-9'>
                    <Products /> 
                  </div>            
                  <div className='col-lg-3 col-12'>
                    <Filter />
                  </div>
            </div>

        </div>
        <Cart />

    </>
  )
}
