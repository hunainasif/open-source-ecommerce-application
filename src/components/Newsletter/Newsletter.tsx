import { Send } from '@mui/icons-material'
import React from 'react'
import styles from "./newsletter.module.css"
 export default function NewsLetter() {
  return (
    <div className={styles.newsLetter}>
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.heading}>NEWSLETTER SIGN UP</h1>
            </div>
            <div className={styles.center}>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicin  Repellendus blanditiis distinctio et, odit quam vel sunt amet  necessitatibus?</p>
            </div>
            <div className={styles.bottom}>
                <input type="email" name="newsLetter" id="" placeholder='Enter your email address' className={styles.emailBox}/>
                <div className={styles.send}>
                    <Send style={{fontSize:"40px"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}