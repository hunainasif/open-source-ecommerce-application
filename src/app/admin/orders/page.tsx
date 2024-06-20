"use client"
import React, { useEffect, useState } from 'react'
import styles from "./orders.module.css"
import { Delete, Search, Visibility } from '@mui/icons-material'
import Link from 'next/link'
export default function Orders() {


  let [orders,setOrders]=useState([])

  const getOrder=async()=>{
    try {
      const res=await fetch(`/api/orders`,{
        "method":"Get",
      })
  
      let data=await res.json()
      // console.log(data.order)
      setOrders(data.order)
    } catch (error) {
      throw new Error("Something went wrong")
    }
   
  }

  useEffect(()=>{
    getOrder()
  },[])
  return (
    <div className={styles.orders}>
      
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.heading}>Orders</h1>
          <div className={styles.searchContainer}>
            <input type="text" value="" placeholder='Search Orders by User Name' />
            <div className={styles.searchButton}>

            <Search className={styles.searchIcon}/>
            </div>
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order Id</th>
              <th >User</th>
             
              <th>Total Amount</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            
          {!orders ? <tr><td>Loading...</td></tr>: orders.map((item:any,i)=>(
            <tr key={i}>
              <Link href={`/admin/orders/${item._id}`}>
              <td style={{cursor:"pointer"}}>{item._id.slice(0,8)}</td>
              </Link>
              <td style={{cursor:"pointer"}}>{item.user}</td>
            
              <td>{item.totalAmount}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.orderStatus}</td>
              <td><button className={styles.nextButton}>NextStage</button></td>
            </tr>
          ))  }
           
          </tbody>
        </table>
      </div>
     
    </div>
  )
}
