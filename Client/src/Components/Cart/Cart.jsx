import React from "react";
import { useState } from "react";
import CheckOut from "../CheckOut/CheckOut";
import Fade, { Reveal } from "react-reveal";
import { connect } from "react-redux";
import { removeCart } from "../../Store/Actions/Cart";
import OrderModal from "./OrderModal";
// import img from '../../../public/images/handfree2.jpg'
import { createOrder, clearOrder } from '../../Store/Actions/orders';
function Cart(props) {
  let [ShowCheckForm, setShowCheckForm] = useState(false);
  let [value, SetValue] = useState("");
  let [order, setOrder] = useState(false);

  function SubmitForm(e) {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
    props.createOrder(order)
  }
  function handleChange(e) {
    SetValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

function closeModal(){
  props.clearOrder();
  setShowCheckForm(false);
}


 
  return (
    <>
      <div className="py-5 container">
        <Fade>
          {props.CardItems.length == 0 ? (
            "Cart is Empty"
          ) : (
            <h3>There is {props.CardItems.length} products in Cart</h3>
          )}
        </Fade>
        <div className="line"></div>
        {props.CardItems.map((c, index) => (
          <div
            className="py-2 bg-grey shadow rounded my-4 d-flex justify-content-around align-items-center"
            key={index}
          >
            <Fade left>
              <div className="imgsSize me-4 text-center">
                <img src={c.imageUrl} className="w-100 h-50" />{" "}
                <div>
                  <p className="p-0 m-0">{c.title}</p>
                  <p className="p-0 m-0">Qty: {c.qty}</p>
                  <p className="p-0 m-0">Price: {c.price}</p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div>
                <button
                  className="btn btn-success border-0"
                  onClick={() => props.removeCart(c)}
                >
                  remove
                </button>
              </div>
            </Fade>
          </div>
        ))}

<OrderModal CardItems={props.CardItems} order={props.order} closeModal={closeModal} />
    
        {props.CardItems ? (
          <Fade top>
            <div className="d-flex justify-content-around totalPrices">
              <h4 className="">Total Prices is: {props.CardItems.reduce(  (acc,p) =>{
                return acc + p.price

              } , 0  )}$ </h4>
              <button
                className="btn btn-danger"
                onClick={() => setShowCheckForm(true)}
              >
                Select Products
              </button>
            </div>
          </Fade>
        ) : (
          ""
        )}
      </div>

      <CheckOut
        SubmitForm={SubmitForm}
        setShowCheckForm={setShowCheckForm}
        ShowCheckForm={ShowCheckForm}
        handleChange={handleChange}
      />
    </>
  );
}

export default connect(
  (state) => {
    return {
      order: state.order.order,
      CardItems: state.cart.CardItems
    };
  },
  { removeCart, createOrder, clearOrder }
)(Cart);
