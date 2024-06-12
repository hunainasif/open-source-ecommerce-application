"use client"
import React, { useEffect, useState } from 'react'
import styles from "./singleItem.module.css"
import { ArrowBackIos, ArrowForwardIos, CheckCircleOutline, CurrencyPound, FavoriteBorder, ShoppingCart  } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/toolkit/cartSlice'
export default function SingleItem({params}:{params:{category:string,subCategory:string,singleItem:string}}) {
  // {params.category}
  // {params.subCategory}
  // {params.singleItem}

  const [productItem, setProductItem] = useState<any>("");

 const dispatch=useDispatch()
  // const sliderImags=[
  //   "/img/men_bottom.jpg",
  //   "/img/men_jacket.jpg",
  //   "/img/men_shoes.jpg"
  // ]

  useEffect(()=>{

    const getProduct=async()=>{
      try {
        let res=await fetch(`/api/products/${params.singleItem}`)

        let data=await res.json()
        setProductItem(data.product)
      } catch (error) {
        throw new Error("Internal Server Error From Single Product Side")
        
      }
   
      }
      getProduct()
  },[params.singleItem])
    // console.log(productItem)

  const [index,setIndex]=useState(1)

  const [size,setSize]=useState("")
  console.log(size)

  const [slideNumber,setSlideNumber]=useState(0)
  // console.log(sliderImags)

  const handleSlide = (direction:string) => {
    if (direction === "left") {
      setSlideNumber((prev) => prev >0 ? prev -1 :prev);
    }
    if (direction === "right") {
      setSlideNumber((prev) =>prev < 2 ? prev +1 :prev);
    }
  };


  const handleCart=()=>{
    dispatch(addToCart({...productItem,index,size}))
  }
  return (
    <div className={styles.singleItem}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Section of The Page */}
          <div className={styles.left}>
           <div className={styles.leftContainer}>
          
            <ArrowBackIos className={styles.arrow} style={{left:"0"}} onClick={()=>{handleSlide("left")}}/>
            
            <div className={styles.imageWrapper}>
            {productItem.images?.map((item:any, i:any) => (
          <div  className={styles.imageContainer}
            style={{ transform: `translateX(${-100 * slideNumber}%)` }}
            key={i}>
            <img src={`/uploads/${item}`} alt="" className={styles.img} />
          </div>
        ))}
            </div>
             
            <ArrowForwardIos className={styles.arrow} style={{right:"0"}} onClick={()=>{handleSlide("right")}}/>
            
           </div>
          </div>

          {/* Right Section of the Page */}
          <div className={styles.right}>
            

            {/* Top Section of the Page that contain Description Favourite Icon */}

             <div className={styles.top}>
              <div className={styles.description}>

            
              <span className={styles.title}>{productItem.title}</span>
              <span className={styles.desc}>{productItem.description}</span>
              </div>
              
              <FavoriteBorder className={styles.favIcon}/>
             </div>

             {/* Center Of The RIght That contain Money Matters */}
             <div className={styles.center}> 
              <div className={styles.money}>
                 <CurrencyPound className={styles.currencyIcon}/>
                 <span className={styles.price}>{productItem.price}</span>
                 <span>.00</span>
              </div>

              <div className={styles.sizes}>
                <select className={styles.selectSize} name="sizes" id="" onChange={(e)=>{setSize(e.target.value)}} >
                  {productItem.sizes?.map((item:any,i:any)=>(
                  <option onChange={()=>{setSize(item)}} className={styles.optionSize} value={productItem.sizes.item} key={i}>{item.toUpperCase()}</option>
                  ))}
                  
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
               <div onClick={handleCart} className={styles.cart}>
                <ShoppingCart className={styles.finalIcons}/>
                Add To Cart
               </div>

               <Link href="/cart" className={styles.checkOut}>
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
