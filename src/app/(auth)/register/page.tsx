import React from 'react'

export default function Register() {
  return (
   <div className="register">
    <div className="container">
      <form action="" className='form'>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      </form> 
      <button type='submit'>Register</button>

    </div>
   </div>
  )
}
