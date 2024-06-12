 "use client"
 import React, { useState } from 'react'
import styles from "./register.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'



export default function Register() {
  const router=useRouter()

  let [credentials,setCredentials]=useState({name:"",email:"",password:""})

  const handleClick=async()=>{

    let res=await fetch(`/api/users/register`,{
      method:"POST",
      headers:{
        "Content-type":"applicaton/json"
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
    })
    let data=await res.json()
    console.log(data)
    if(data.success){
      router.push("/login")
    }

  }

  const handleChange=(e:any)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})

  }

   
  return (
    <div className={styles.register}>
       <div className={styles.container}>
        <h1 className={styles.heading}>REGISTER YOURSELF</h1>
        <div className={styles.main}>
          <input onChange={handleChange}  value={credentials.name}  type="text" name="name" id=""  placeholder='Enter Your Name'/>
          <input onChange={handleChange}  value={credentials.email}  type="email" name="email" id="" placeholder='Enter Your Email' />
          <input onChange={handleChange}  value={credentials.password}  type="password" name="password" id="" placeholder='Enter Your Password' />
          <button className={styles.registerBtn} onClick={handleClick} >Register</button>
          <hr  className={styles.line}/>
          <Link href="/login" className={styles.login}>Already have an account?</Link>
          <span className={styles.connect}>Connect With Us</span>

        </div>
       </div>
    </div>
  )
}