"use client"
import { LogOut, LoginWithGoogle } from '@/utils/action'
 import React from 'react'

export default function Login() {
  
  return (
     <div className="container">
      <div className="wrapper">
        <div className="loginForm">

     
        <form action="">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
        </div>
        <div className="socialMedia">
          <form action={LoginWithGoogle}>

          <button >Login with google</button>
          </form>

          
          <form action={LogOut}>

          <button > Logout with google</button>
          </form>
        </div>

      </div>
     </div>
  )
}
