import React from 'react'
import styles from "./singleUser.module.css"
import { AccountCircle } from '@mui/icons-material'
import Image from "next/image"
export default function SingleUser() {

  let imga=false
  return (
    <div className={styles.singleUser}>

      <div className={styles.container}>
        <div className={styles.top}>

        <h1 className={styles.heading}>User Information</h1>
        <div className={styles.imgContainer}>
          <Image src="/img/men_bottom.jpg" className={styles.img} alt="" /> :<AccountCircle className={styles.profileIcon}/> 
        </div>
        </div>
        
          <div className={styles.bottom}>
            <div className={styles.form_control}>
              <label htmlFor="">Id</label>
              <input type="text" name="id" id="" />
             </div>
            <div className={styles.form_control}>
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="" />
             </div>
            <div className={styles.form_control}>
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="" />
             </div>
            <div className={styles.form_control}>
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="" />
             </div>

            <button className={styles.updateBtn}>Update</button>
          </div>
        </div>
        

      
     </div>
  )
}
