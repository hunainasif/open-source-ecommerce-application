 import Sidebar from '@/components/adminComponents/Sidebar/Sidebar'
import React from 'react'
import styles from "./admin.module.css"
export default function AdmiLayout({children}: {
    children: React.ReactNode
  }) {
  return (
    <div className={styles.layout}>  
      <Sidebar/>
      {children}  
    </div>
  )
}
