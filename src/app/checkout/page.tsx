import React from 'react'

export default function Checkout() {
  return (
    <div className="checkOut">
      <h1 className="mainHeading">Checkout</h1>
      <div className="container">
        <form action="">
          <div className="form_control">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" />
          </div>
          <div className="form_control">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="form_control">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" />
          </div>
          <div className="form_control">
            <label htmlFor="">Contact Number</label>
            <input type="tel" name="" id="" />
          </div>
        </form>
        <div className="payments">
          <button>Pay</button>
        </div>
      </div>
    </div>
  )
}
