import React from 'react'
import { useState } from 'react'
import ProductModal from './ProductModal';
import Fade from 'react-reveal'; 

import {connect} from 'react-redux'
import { fetchProducts } from '../../Store/Actions/Products';
import { useEffect } from 'react';

import {addToCart} from '../../Store/Actions/Cart'
function Products(props) {

  const [singleProd , setSingleProd] = useState("");
  function OpenModal(pro){
    setSingleProd(pro)
  }

useEffect(()=>{
  props.fetchProducts()
},[])



function CloseProduct(){
  setSingleProd(false);
}

  return (
    <>
 <div className='row'>
  <Fade left cascade >
            {props.products && props.products.length? props.products.map( (prod,index)  => 
                  <div className='col-lg-3 col-md-6 mb-3' key={index}>
                    <div className='border p-1'>
                      <div className='images-style'>
                        <a href='#' onClick={  () => OpenModal(prod)      }>
                        <img src={prod.imageUrl} className='w-100 h-100' alt={prod.title} /></a></div>
                      <div className='d-flex justify-content-between'>
                        <p>{prod.title}</p>
                        <p>{prod.price}$</p>
                      </div>

                      <button className='btn btn-success border-0 w-100' onClick={ ()=> props.addToCart(prod)}>Add To Card</button>
                  </div>
                  </div>
                  
            ): <h3 className='mt-5 '>No Products</h3>} 

               </Fade>
                </div>  
                      
      
  <ProductModal singleProd={singleProd} CloseProduct={CloseProduct} />
</>
  )
}
export default connect (   (state)=>{
  return {
    products: state.products.filterProducts 
  }
} , { fetchProducts, addToCart }  ) (Products)