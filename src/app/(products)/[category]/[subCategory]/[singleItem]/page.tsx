"use client"
import React, { useState } from 'react'
import styles from "./singleItem.module.css"
import { ArrowBackIos, ArrowForwardIos, CheckCircleOutline, CurrencyPound, FavoriteBorder, ShoppingCart  } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
export default function SingleItem({params}:{params:{category:string,subCategory:string,singleItem:string}}) {
  // {params.category}
  // {params.subCategory}
  // {params.singleItem}

  const sliderImags=[
    "/img/men_bottom.jpg",
    "/img/men_jacket.jpg",
    "/img/men_shoes.jpg"
  ]

  const [index,setIndex]=useState(1)

  const [slideNumber,setSlideNumber]=useState(0)
  console.log(sliderImags)

  const handleSlide = (direction:string) => {
    if (direction === "left") {
      setSlideNumber((prev) => prev >0 ? prev -1 :prev);
    }
    if (direction === "right") {
      setSlideNumber((prev) =>prev < 2 ? prev +1 :prev);
    }
  };
  return (
    <div className={styles.singleItem}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Section of The Page */}
          <div className={styles.left}>
           <div className={styles.leftContainer}>
          
            <ArrowBackIos className={styles.arrow} style={{left:"0"}} onClick={()=>{handleSlide("left")}}/>
            
            <div className={styles.imageWrapper}>
             {sliderImags.map((item,id)=>(
              <div className={styles.imageContainer} style={{ transform: `translateX(${-100 * slideNumber}%)` }} key={id}>
                <img  src={item} alt="" className={styles.img}   />
              </div>
             )) }
            </div>
             
            <ArrowForwardIos className={styles.arrow} style={{right:"0"}} onClick={()=>{handleSlide("right")}}/>
            
           </div>
          </div>

          {/* Right Section of the Page */}
          <div className={styles.right}>
            

            {/* Top Section of the Page that contain Description Favourite Icon */}

             <div className={styles.top}>
              <div className={styles.description}>

            
              <span className={styles.title}>Timberland Ankle Classic Boots</span>
              <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita aperiam tempora, temporibus quod amet incidunt. Aut molestias perferendis consequatur sapiente quas. Officiis Aut molestias perferendis consequatur sapiente quas. Officiistemporibus porro consequatur facere inventore, sint ducimus?</span>
              </div>
              
              <FavoriteBorder className={styles.favIcon}/>
             </div>

             {/* Center Of The RIght That contain Money Matters */}
             <div className={styles.center}> 
              <div className={styles.money}>
                 <CurrencyPound className={styles.currencyIcon}/>
                 <span className={styles.price}>129</span>
                 <span>.00</span>
              </div>

              <div className={styles.sizes}>
                <select className={styles.selectSize} name="" id="">
                  <option className={styles.optionSize} value="">X-SMALL</option>
                  <option className={styles.optionSize} value="">SMALL</option>
                  <option className={styles.optionSize} value="">Medium</option>
                  <option className={styles.optionSize} value="">LARGE</option>
                  <option className={styles.optionSize} value="">2XL</option>
                  <option className={styles.optionSize} value="">3XL</option>
                </select>
              </div>
              <div className={styles.quantity}>
              <button className={styles.quantityBtn} onClick={() => { setIndex(prev => prev !== 1 ? prev - 1 : prev) }}> - </button>

                {index}
                <button className={styles.quantityBtn} onClick={()=>{setIndex(prev=>prev+1)}}>+</button>
              </div>

              
             </div>

             {/* bottom of the RIght That COntain Checkout Buttons */}
             <div className={styles.bottom}>
               <Link href="/cart" className={styles.cart}>
                <ShoppingCart className={styles.finalIcons}/>
                Add To Cart
               </Link>

               <Link href="/checkout" className={styles.checkOut}>
                <CheckCircleOutline className={styles.finalIcons}/>
                CheckOut
               </Link>
             </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}
