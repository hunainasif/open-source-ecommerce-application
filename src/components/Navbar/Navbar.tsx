 "use client"
 import { Menu, ShoppingCart, SupervisedUserCircle } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import Badge from '@mui/material/Badge';
import styles from "./navbar.module.css"
import Link from 'next/link';
import { useSelector } from 'react-redux';

import type { RootState } from "@/toolkit/store"
import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';

 export default function Navbar() {

  const [openMenu,setMenu]=useState(true)


  let router=useRouter()
  const handleClick=()=>{
    localStorage.removeItem("user")
    router.push("/")
  }

  const cart=useSelector((state: RootState)=>state.cart.cartQuantity)
  console.log(cart)
  let {user}=useContext(AuthContext)
  let session
  if(user){
    session=true
  }
  else{
    session=false
  }
   return (
     <div className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Link href={"/"} className={styles.logoItem}>OSEA</Link>
          </div>
          <div className={styles.menu}>
            <Menu className={styles.menuIcon} onClick={()=>{setMenu(prev=>!prev)}}/>
          </div>
        </div>
        <div className={styles.secondary}>
          <div className={styles.links}>
            <Link href={"/men"} className={styles.listItem}>MEN</Link>
            <Link href={"/women"} className={styles.listItem}>WOMEN</Link>
            <Link href={"/kids"} className={styles.listItem}>KIDS</Link>
          </div>
          <div className={styles.operations}>
            <Link  href={"/cart"} className={styles.cart}>
            <Badge badgeContent={cart} color="primary">
               <ShoppingCart className={styles.shoppingIcon}/>
            </Badge>
            </Link>
            <div className={styles.auth}>
              {!session ?<div className={styles.session}>
                <Link href={"/login"} className={styles.btnLogin}>LOGIN</Link>
                <Link href={"/register"} className={styles.btnRegister}>REGISTER</Link>
              </div>:
              <div className={styles.user}>
                 <button className={styles.logOut} onClick={handleClick}>LOGOUT</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
       
     </div>
   )
 }
 