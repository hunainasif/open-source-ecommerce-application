
"use client"
import React, { useEffect, useState } from 'react'
import styles from "./singleOrder.module.css"
import Link from 'next/link'
 


export default function SingleOrder({ params }: { params: { slug: string } }) {
   let [order,setOrder]=useState("")
   let [product,setProduct]=useState("")
   let {slug}=params

    useEffect(()=>{
      let getSingleOrder=async()=>{
        let res=await fetch(`/api/orders/${slug}`)

        let data=await res.json()

      console.log(data)
      setOrder(data.order)
      }

      getSingleOrder()

    },[slug])

   



  // {/* <h1>{params.slug}</h1> */}
  return (
    <div className={styles.singleOrder}>

        <h1 className={styles.mainHeading}>Order : {params.slug}</h1>
      <div className={styles.container}>

        {/* Here is the Left Side of the Single Order page which contains the array of Products */}
        <div className={styles.left}>
          <h1 className={styles.productHeading}>Products</h1>
          
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          <div className={styles.singleProduct}>
            <div className={styles.productLeft}>
              <div className={styles.imgContainer}>
                <img src="/img/women_bottom.jpg" alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.productCenter}>
              <span className={styles.title}>Hey I am the Product </span>
              <span className={styles.size}>size:Medium</span>
            </div>
            <div className={styles.productRight}>
              <span className={styles.quantity}>2</span>
              <span className={styles.multiply}>X</span>
              <span className={styles.productPrice}>$120</span>
              <span className={styles.equal}>=</span>
              <span className={styles.totalPrice}>$240</span>
            </div>
          </div>
          {/* hey  */}

        </div>
          {/* this is the Right Section of the Single Order Page which Contain the User's Details */}
        <div className={styles.right}>
          <div className={styles.customerTop}>
          <h1 className={styles.customerHeading}>Customer Details</h1>
            <div className={styles.customerCredentials}>
              <span>Name</span>
              <span>Joh Doe</span>
            </div>
            <div className={styles.customerCredentials}>
              <span>Email</span>
              <span>JohDoe@gmail.com</span>
            </div>
            <div className={styles.customerCredentials}>
              <span>Phone</span>
              <span>+92009089819</span>
            </div>
             

          </div>
          <div className={styles.customerCenter}>
            <h1 className={styles.customerHeading}>Customer Address</h1>
            <div className={styles.customerCredentials}>
              <span>Address</span>
              <span>5th Street,99 road birmingham</span>
            </div>
          </div>
          <div className={styles.customerBottom}>
            <h1 className={styles.customerHeading}>Order Status</h1>

            <div className={styles.orderStatus}>
                <span className={styles.orderStatusHeading}>OrderStatus</span>
                <select className={styles.orderStatus}>
                  <option className={styles.pending}>Pending</option>
                  <option className={styles.processing}>Processing</option>
                  <option className={styles.shipped}>Shipped</option>
                  <option className={styles.delivered}>Delivered</option>
                  </select> 
              </div>
            
              <div className={styles.customerCredentials}>
                <span  >Payment Status</span>
                <span>Paid</span> 
              </div>
              <div className={styles.customerCredentials}>
                <span className={styles.totalAmount}>Total Amount</span>
                <span className={styles.totalNumber}>$1590</span> 
              </div>

             
            
          </div>
        </div>
      </div>

    </div>
  )
}
