import React from 'react'
import styles from "./sidebar.module.css"
import { Category, Message, NoteAlt, PeopleOutline, Sell, Settings, Work } from '@mui/icons-material'
import Link from 'next/link'
export default function Sidebar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <Link href="/admin/users" className={styles.listItem}>
            <PeopleOutline className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Users</span>
          </Link>
          <Link href="/admin/orders" className={styles.listItem}>
            <Sell className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Orders</span>
          </Link>
          <Link href="/admin/products" className={styles.listItem}>
            <Category className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Products</span>
          </Link>
          <Link href="/admin" className={styles.listItem}>
            <Settings className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Settings</span>
          </Link>
          <Link href="/admin" className={styles.listItem}>
            <Message className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Messages</span>
          </Link>
          <Link href="/admin/blogs" className={styles.listItem}>
            <NoteAlt className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Blogs</span>
          </Link>
          <Link href="/admin/careers" className={styles.listItem}>
            <Work className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Careers</span>
          </Link>
          <Link href="/admin/careers" className={styles.listItem}>
            <Work className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Careers</span>
          </Link>
          <Link href="/admin/careers" className={styles.listItem}>
            <Work className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Careers</span>
          </Link>
          <Link href="/admin/careers" className={styles.listItem}>
            <Work className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Careers</span>
          </Link>
          <Link href="/admin/careers" className={styles.listItem}>
            <Work className={styles.listItemIcon}/>
            <span className={styles.listItemText}>Careers</span>
          </Link>
          
         
          
        </ul>
      </div>
    </div>
  )
}
