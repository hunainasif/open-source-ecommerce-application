"use client"
import React, {  useContext, useState } from 'react'
import styles from "./login.module.css"
import Link from 'next/link'
import { AuthContext } from '@/context/authContext'
  
 
 export default function Login() {

  const {user,login}=useContext(AuthContext)

  console.log(user)

  let [credentials,setCredentials]=useState({email:"",password:""})
  console.log(credentials)

  const handleChange=(e:any)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const handleClick=()=>{
    login({email:credentials.email,password:credentials.password})
    
  }

    
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>LOGO</h1>
          <p className={styles.description}>LOGO helps you connect and share with the people in your life.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.main}>
            <input onChange={handleChange} value={credentials.email}  type="email" name="email" id="" placeholder='Email address'/>
            <input onChange={handleChange} value={credentials.password}   type="password" name="password" id="" placeholder='Password' />
            <button className={styles.loginBtn} onClick={handleClick}  >Log in</button>
            <span className={styles.forgot}>Forgotten password?</span>
            <hr className={styles.line} />
           <Link  href="/register" className={styles.registerBtn}>Create new account</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}