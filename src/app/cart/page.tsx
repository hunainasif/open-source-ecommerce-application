"use client"
import React, { useContext, useState } from 'react'
import styles from  "./cart.module.css"
import { Delete, Favorite, Note, Shop } from '@mui/icons-material'
import Link from 'next/link'
import type { RootState } from "@/toolkit/store"
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '@/toolkit/cartSlice'
import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/navigation'
  
export default function Cart() {
  let router=useRouter()

  const cart=useSelector((state:RootState)=>state.cart)

  console.log(cart.products)

  const dispatch=useDispatch()

  let {user}=useContext(AuthContext)

  const handleDelete=(productId:any)=>{
    dispatch(removeProduct(productId))
  }

  const handleClick=async()=>{
    if(!user){
      router.push("/login")
    }
    else{
      let res=await fetch(`/api/orders`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          user:user.id,
          products:cart.products,
          totalAmount:cart.totalPrice,
          
        })
      })
      let data=await res.json()
      console.log(data)
      router.push("/")
    }
    
  }
  


  
  console.log(cart)
  return (
    <div className={styles.cart}>
        <h1 className={styles.heading}>Shopping Cart <Shop/></h1>
      {cart.cartQuantity >0? <div className={styles.container}>
        <div className={styles.left}>
          {/* singleItem Start */}
          {cart.products.length >0 ? cart.products.map((item:any,i:any)=>(
            <div className={styles.singleItem} key={i}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src={`/uploads/${item.images[0]}`} alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemPrice}>${item.price}.00</span>
              <span className={styles.itemSize}>{item.size}</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}  onClick={()=>{handleDelete(item._id)}}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton} >-</button>
                <span className={styles.itemQuantity}>{item.quantity}</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>${item.index * item.price}.00</span>
            </div>
          </div>)):<div>Cart is Empty</div>}
          
          {/* here */}
        </div>
        <div className={styles.right}>
          <div className={styles.rightWrapper}>

         
          <div className={styles.rightTop}>
            <h1 className={styles.summary}>Order Summary</h1>
          </div>
          <div className={styles.rightCenter}>
            <div className={styles.values}>
              <span className={styles.valueText}>Order Value</span>
              <span>${cart.totalPrice}.00</span>
            </div>
            <div className={styles.values}>
              <span className={styles.valueText}>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.values}>
              <span className={styles.valueText}>Estimated Tax</span>
              <span>--</span>
            </div>
            <br className={styles.endingLine}/>
            <div className={styles.values}>
              <span className={styles.valueText}>Total Cost</span>
              <span>${cart.totalPrice}.00</span>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <button   className={styles.checkOutButton} onClick={handleClick}>Proceed To Checkout</button>
          </div>
        </div>
        </div>
       </div> :<div style={{textAlign:"center",marginTop:"20px"}}>Add Something in the Cart</div>}
    </div>
  )
}
