import React from 'react'
import {Zoom } from 'react-reveal'; 

export default function CheckOut(props) {
  return (
    <div>
      
        {props.ShowCheckForm? 
            <div className='bg-gray p-3 position-relative' >
              <span onClick={()=>  props.setShowCheckForm(false) } className='position-absolute top-0 end-0 me-3 h3 cursurePointer'> &times;</span>
              <Zoom>
              <form onSubmit={props.SubmitForm} className='p-3'>
                  <div className="form-group mb-4">
                    <label htmlFor="InputName">Enter Name</label>
                    <input type="text" name='name' onChange={props.handleChange}   className="form-control" required id="InputName" placeholder="Enter Name" />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="InputEmail1">Enter Email</label>
                    <input type="email"  name='email' onChange={props.handleChange}  className="form-control" required id="InputEmail1" placeholder="Enter email" />
                  </div>
                  
                  <button type="submit" className="btn btn-success">Submit</button>
              </form></Zoom>
            </div>
        : ''}
    </div>
  )
}
