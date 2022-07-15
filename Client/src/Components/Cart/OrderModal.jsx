import React from 'react'
import Modal from "react-modal";


 function OrderModal(props) {
    const {order, closeModal, CardItems} = props
  return (
    <>
    { order && 
    <Modal isOpen={order} onRequestClose={closeModal} ariaHideApp={false}  >
    <span className="fw-bold fs-4 closeProduct"  onClick={   closeModal   }>&times;</span>
    <p className="bg-success text-white mt-3 py-2 px-1 fs-3">Order Done Succesffully </p>
    <table className="fs-5">
      <tr>
        <td className="fw-bold">Name: </td>
        <td className="ps-3  py-3">{order.name}</td>
      </tr>

      <tr>
        <td className="fw-bold">Email: </td>
        <td className="ps-3  py-3">{order.email}</td>
      </tr>

      <tr>
        <td className="fw-bold">Total: </td>
        <td className="ps-3  py-3">
          {CardItems.reduce((acc, p) => {
            return acc + p.price * p.qty;
          }, 0)}<span className="fw-bold">$</span>
        </td>
      </tr>

      <tr>
        <td className="fw-bold">Selected Items: </td>
        <td className="ps-3  py-3">{CardItems.map ( (p , index) => (
          <div key={index}>
          <p>Number of this products: {p.qty}</p>
          <p>Title of this products: {p.title}</p>
        </div>
        )    ) }</td>
      </tr>




    </table>
  </Modal>

    }
    </>
    
  )
}
export default OrderModal