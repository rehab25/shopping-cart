import React from 'react'
import {fetchOrders} from '../Store/Actions/orders'
import { connect } from 'react-redux'
import { useEffect } from 'react'

 function Orders(props) {
    console.log(props.CardItems)
useEffect (   () => {
    props.fetchOrders()
},[])
const {orders} = props
console.log(orders)
console.log(props.CardItems)
  return (
    <div className='container'>
        <table className='table'>
            <thead className=''>
                <tr>
                    <th scope='col'>id</th>
                    <th scope='col'>name</th>
                    <th scope='col'>email</th>
                  <th scope='col'>items</th>
                </tr>
            </thead>
            <tbody>
            {orders && orders.map((order,index) => (
                <tr key={index}>
                    <td className='py-3'>{order._id}</td>
                    <td className='py-3'>{order.name}</td>
                    <td className='py-3'>{order.email}</td>
                    <td className='py-3'>{props.CardItems.map ( p => (
                        <p>  {p.title} , qty: { p.qty  } </p>
                    )

                    )}</td>
                </tr>
            ))

            }</tbody>
        </table>        
    </div>
  )
}

export default connect(  (state) =>{
    return {
        orders: state.order.orders,
        CardItems: state.cart.CardItems

    }
} , {fetchOrders}   )(Orders)
