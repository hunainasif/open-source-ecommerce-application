"use client"
import React, { useState } from 'react'
import styles from "./singleItem.module.css"
import { CheckCircleOutline, CurrencyPound, FavoriteBorder, ShoppingCart  } from '@mui/icons-material'
export default function SingleItem({params}:{params:{category:string,subCategory:string,singleItem:string}}) {
  // {params.category}
  // {params.subCategory}
  // {params.singleItem}

  const [index,setIndex]=useState(0)
  return (
    <div className={styles.singleItem}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1>Hey i am Left</h1>
          </div>
          <div className={styles.right}>
             <div className={styles.top}>
              <span className="title">Timberland Ankle Classic Boots</span>
              <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita aperiam tempora, temporibus quod amet incidunt. Aut molestias perferendis consequatur sapiente quas. Officiis temporibus porro consequatur facere inventore, sint ducimus?</span>
              
              <FavoriteBorder/>
             </div>
             <div className="center">
              <div className="money">

              <CurrencyPound/>
              <span className="price">129</span>
              <span>.00</span>
              </div>

              <div className="sizes">
                <select name="" id="">
                  <option value="">X-SMALL</option>
                  <option value="">SMALL</option>
                  <option value="">Medium</option>
                  <option value="">LARGE</option>
                  <option value="">2XL</option>
                  <option value="">3XL</option>
                </select>
              </div>
              <div className="quantity">
              <button onClick={() => { setIndex(prev => prev !== 0 ? prev - 1 : prev) }}> - </button>

                {index}
                <button onClick={()=>{setIndex(prev=>prev+1)}}>+</button>
              </div>

              
             </div>

             <div className="bottom">
               <div className="cart">
                <ShoppingCart/>
                Add To Cart
               </div>

               <div className="checkOut">
                <CheckCircleOutline/>
                CheckOut
               </div>
             </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}
