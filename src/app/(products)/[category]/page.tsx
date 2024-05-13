import React from 'react'
import styles from "./category.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function Category({ params }: { params: { category: string } }) {
  
  const menLinks=[
     {
      id:1,
      title:"Shirts",
      img:"/img/men_shirt.jpg"
     },
     {
      id:2,
      title:"Bottoms",
      img:"/img/men_bottom.jpg"
     },
     {
      id:3,
      title:"Jackets",
      img:"/img/men_jacket.jpg"
     },
     {
      id:4,
      title:"Shoes",
      img:"/img/men_shoes.jpg"
     },
     {
      id:5,
      title:"SkinCare",
      img:"/img/men_skincare.jpg"
     },
     {
      id:6,
      title:"Formals",
      img:"/img/men_formals.jpg"
     },
  ]
  const  womenLinks=[
     {
      id:1,
      title:"Shirts",
      img:"/img/women_shirt.jpg"
     },
     {
      id:2,
      title:"Bottoms",
      img:"/img/women_bottom.jpg"
     },
     {
      id:3,
      title:"Jackets",
      img:"/img/women_jacket.jpg"
     },
     {
      id:4,
      title:"Shoes",
      img:"/img/women_shoes.jpg"
     },
     {
      id:5,
      title:"SkinCare",
      img:"/img/women_skin.jpg"
     },
     {
      id:6,
      title:"Formals",
      img:"/img/women_formals.jpg"
     },
  ]
  const kidsLinks=[
     {
      id:1,
      title:"Shirts",
      img:"/img/men_shirt.jpg"
     },
     {
      id:2,
      title:"Bottoms",
      img:"/img/men_bottom.jpg"
     },
     {
      id:3,
      title:"Jackets",
      img:"/img/men_jacket.jpg"
     },
     {
      id:4,
      title:"Shoes",
      img:"/img/men_shoes.jpg"
     },
     {
      id:5,
      title:"SkinCare",
      img:"/img/women_skin.jpg"
     },
     {
      id:6,
      title:"Formals",
      img:"/img/men_formals.jpg"
     },
  ]
  return (
    <div className={styles.category}>
      <h1 className={styles.heading}>{params.category.toUpperCase()}</h1>
       <div className={styles.container}>

       {
    params.category === "men" ? 
        menLinks.map((item) => (
            <div className={styles.item} key={item.id}>
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" layout="fill" className={styles.img} />
                </div>
                <div className={styles.textContainer}>
                    <Link href={`/${params.category}/${item.title}`.toLowerCase()} className={styles.text}>{item.title}</Link>
                </div>
            </div>
        )) : 
        params.category === "women" ? 
            womenLinks.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image src={item.img} alt="" layout="fill" className={styles.img} />
                    </div>
                    <div className={styles.textContainer}>
                        <Link href={`/${params.category}/${item.title}`.toLowerCase()} className={styles.text}>{item.title}</Link>
                    </div>
                </div>
            )) : 
            kidsLinks.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image src={item.img} alt="" layout="fill" className={styles.img} />
                    </div>
                    <div className={styles.textContainer}>
                        <Link href={`/${params.category}/${item.title}`.toLowerCase()} className={styles.text}>{item.title}</Link>
                    </div>
                </div>
            ))
}
          
       </div>
    </div>
  )
}
