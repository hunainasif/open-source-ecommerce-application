import { Send } from '@mui/icons-material'
import React from 'react'
import styles from "./newsletter.module.css"

export default function Newsletter() {
  return (
     <div className={styles.newsLetter}>
      <div className={styles.container}>
        <div className={styles.top}>

        <h1 className={styles.heading}>NEWSLETTER</h1>
        <p className={styles.description}>Get timely updates from your favourite products.</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.inputContainer}>
            <div className={styles.input}>
              <input type="email" name="" placeholder='Your Email' id="" className={styles.inputBox} />
            </div>
            <div className={styles.btn}>
              <Send className={styles.sendIcon}/>
            </div>
          </div>
        </div>
         
      </div>
     </div>
  )
}
