import React from 'react'
import Modal from 'react-modal'


export default function ProductModal(props) {
    const{singleProd, CloseProduct} = props;
    console.log(props)
  return (
    singleProd?
    <Modal isOpen= {singleProd}   onRequestClose={CloseProduct} ariaHideApp={false} >
        <span className='fw-bold fs-4 closeProduct' onClick={ ()=> CloseProduct()}>&times;</span>
        <img src={singleProd.imageUrl} className="w-100 h-100"  />
        <div className='text-center'>
            <p>{singleProd.title}</p>
            <p>{singleProd.desc}</p>
            <p>{singleProd.price}</p>
        </div>
    </Modal> :''
  )
}
