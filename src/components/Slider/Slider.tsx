"use client"
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./slider.module.css"

export default function Slider() {
  const [index,setIndex]=useState(0)
  console.log(index)
  const images=[
    "/img/Slider1.jpg",
    "/img/Slider2.jpg",
    "/img/Slider3.jpg",
  ]

  const handleClick=(direction:String)=>{
    if(direction === "left"){
      setIndex(index !==0 ? index-1: 2)
    }
    if(direction === "right"){
      setIndex(index !==2 ? index+1 :0 )
    }
  }
  return (
     <div className={styles.slider}>
      <div className={styles.container}>
        <ArrowCircleLeft className={styles.arrow} style={{left:5}} onClick={()=>{handleClick("left")}}/>
        <div className={styles.wrapper}  style={{transform: `translateX(${-100 * index}vw)`}}
>
          {images.map((item,i)=>(
            <div className={styles.imgContainer} key={i}
           
            >
              <Image src={item}   layout='fill'  alt=""   />
            </div>
          ))} 
        </div>
        <ArrowCircleRight className={styles.arrow} style={{right:5}} onClick={()=>{handleClick("right")}}/>
      </div>
     </div>
  )
}
