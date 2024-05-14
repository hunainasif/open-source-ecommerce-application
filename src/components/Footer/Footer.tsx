import React from 'react'
import styles from "./footer.module.css"
import { Facebook, Instagram, Mail, MyLocation, Phone, Pinterest, X, YouTube } from '@mui/icons-material'
import Link from 'next/link'
export default function Footer() {
  return (
     <div className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.leftWrapper}>
          <h1 className={styles.title}>OSEA.</h1>
          <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil architecto neque, sint recusandae nobis sit perferendis excepturi quibusdam, accusamus eos accusantium saepe a voluptates eaque aspernatur voluptatum explicabo. Odio, quidem.</p>
          <div className={styles.socialLinks}>
          <Facebook className={styles.links} style={{ color: '#039BE5' }}/>
          <Instagram className={styles.links}  style={{ color: '#FFDD55' }} />
          <X className={styles.links}  style={{ color: '#616161' }}/>
          <Pinterest className={styles.links}  style={{ color: '#F44F5A' }}/>
          <YouTube className={styles.links}  style={{ color: '#F44F5A' }}/>
          </div>
        </div>
        </div>
        


        <div className={styles.center}>
          <div className={styles.centerWrapper}>
          <span className={styles.heading}>Useful Links</span>
          <ul className={styles.useFulLinks}>
            <Link href="/about" className={styles.listItem}>About</Link>
            <Link href="/contact" className={styles.listItem}>Contact</Link>
            <Link href="/men" className={styles.listItem}>Men</Link>
            <Link href="/women" className={styles.listItem}>Women</Link>
            <Link href="/kids" className={styles.listItem}>Kids</Link>
            <Link href="/cart" className={styles.listItem}>Cart</Link>
            <Link href="/user/order" className={styles.listItem}>Order Tracking</Link>
            <Link href="/careers" className={styles.listItem}>Careers</Link>
            <Link href="/blogs" className={styles.listItem}>Blogs</Link>
            <Link href="/" className={styles.listItem}>Profile</Link>
          </ul>
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.heading}>Contact</span>
          <div className={styles.contact}>
           <div className={styles.contactItem}>
            <MyLocation/><span className={styles.contactHeading}>29th street,West London,United Kingdom</span>
           </div>
           <div className={styles.contactItem}>
            <Phone/><span className={styles.contactHeading}>+44090078601</span>
           </div>
           <div className={styles.contactItem}>
            <Mail/><span className={styles.contactHeading}>OSEA@mail.com</span>
           </div>
          </div>

        </div>
      </div>
     </div>
  )
}
