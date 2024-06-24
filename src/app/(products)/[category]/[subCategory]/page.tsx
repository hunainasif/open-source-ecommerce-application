"use client"
import { AddShoppingCart,  CheckOutlined,  CurrencyPound,  FavoriteBorder } from '@mui/icons-material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from "./subCategory.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function SubCategory({params}:{params:{category:string,subCategory:string}}) {
//   {params.category}
// {params.subCategory}
// console.log(params.category)
// console.log(params.subCategory)

const [products,setProducts]=useState([])


useLayoutEffect(()=>{

  const getProducts=async()=>{
    let res=await fetch(`/api/products?category=${params.category}&subCategory=${params.subCategory}`)
  let data=await res.json()
  setProducts(data.subCategoryProduct)
      console.log(data)
      // console.log(products)
  }

  getProducts()
},[params.category,params.subCategory])

  return (
    <div  className={styles.subCategory}>
       <div className={styles.headings}>
        <h1 className={styles.heading}>{params.category.toUpperCase()}</h1>
        <h1 className={styles.heading}>{params.subCategory.toUpperCase()}</h1>
       </div>

      <div className={styles.container}>

        {/* item Replicate */}
        
     {products.length>0? products.map((item:any,i)=>(
 <Link href={`/${params.category}/${params.subCategory}/${item._id}`} className={styles.item} key={i}>

 <div className={styles.top}>

   <Image src={`/uploads/${item.images[1]}`} alt="Product Image"  className={styles.img}/>
   </div>          
 <div className={styles.bottom}>
   
   <div className={styles.left}>
     <AddShoppingCart className={styles.icon}/>
   </div>
   <div className={styles.center}>
      <div className={styles.title}>{item.title}</div>
      
      <div className={styles.price}>
       <CurrencyPound className={styles.moneyIcon}/>
        <span> {item.price}.00</span>
        
      </div>
   </div>
   <div className={styles.right}>
     <FavoriteBorder className={styles.icon}/>
   </div>
 </div>

</Link>
     )) :<div>No Products Found</div>}
        
         
        {/* till */}
      </div>
    </div>
  )
}
