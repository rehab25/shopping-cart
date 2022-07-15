import React from 'react'
import Fade from 'react-reveal'; 

import { connect } from 'react-redux';
import {filteredSize, filteredSort} from '../../Store/Actions/Products'

function Filter(props) {
  return (

    <Fade right>
        { props.filterProducts && (
             <div className=' border'>
        <h2 className='p-2 text-white mainColor'>Filter</h2>
        <p className='px-2'>Number of Products: {props.filterProducts.length} Products</p>
        <div className='px-2 mb-4'>
            <span>Filter</span>
            <React.Fragment>
            <select
              className="form-select"
             onChange={(e)=>props.filteredSize(props.products, e.target.value)}
             value = {props.size} aria-label="Default select example">
                <option  defaultValue='ALL'>ALL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            </React.Fragment>
        </div>

        <div className='px-2 mb-3'>
      {/* <select value={props.sort} className="form-select" onChange={(e)=>props.handleBySort(e)} aria-label="Default select example"> */}
      <span>Order</span>
            <select value={props.sort} className="form-select"
             onChange={(e)=>props.filteredSort(props.filterProducts, e.target.value)} aria-label="Default select example">
                <option defaultValue='Latest'>Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="highest">highest</option>
            </select>
        </div>
    </div>

      )  }
   
    </Fade>
  )
}
export default connect(  (state)=>{
    return {
        sort: state.products.sort,
        size: state.products.size,
        products: state.products.products,
        filterProducts: state.products.filterProducts,
    };
},
     {
      filteredSize,  filteredSort  }
 ) (Filter);