import React from 'react'
import styles from "./category.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function Category({ params }: { params: { category: string } }) {
  
  const links=[
     {
      id:1,
      title:"Shirts",
      img:"/img/slider2.jpg"
     },
     {
      id:2,
      title:"Bottoms",
      img:"/img/slider2.jpg"
     },
     {
      id:3,
      title:"Jackets",
      img:"/img/slider2.jpg"
     },
     {
      id:4,
      title:"Shoes",
      img:"/img/slider2.jpg"
     },
     {
      id:5,
      title:"SkinCare",
      img:"/img/slider2.jpg"
     },
     {
      id:6,
      title:"Formals",
      img:"/img/slider2.jpg"
     },
  ]
  return (
    <div className={styles.category}>
      <h1 className={styles.heading}>{params.category.toUpperCase()}</h1>
       <div className={styles.container}>

          {links.map((item)=>(
        <div className={styles.item} key={item.id}>
             <div className={styles.imageContainer}>
            <Image src={item.img} alt="" layout="fill" className={styles.img} />
          </div>
           <div className={styles.textContainer}>

            <Link href={(`/${params.category}/${item.title}`).toLowerCase()} className={styles.text}>{item.title}</Link>
           </div>
         
        </div>
          ))}
          
       </div>
    </div>
  )
}
