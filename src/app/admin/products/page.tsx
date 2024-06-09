"use client"
import React, { useEffect, useState } from 'react'
import styles from ".//products.module.css"
import { Category, Delete, Edit, Search, Visibility } from '@mui/icons-material'
import Link from 'next/link'
export default function Products() {



  let [products,setProducts]=useState([])


  useEffect(()=>{

    const getProducts=async()=>{

      try {
        let data=await fetch(`http://localhost:3000/api/products`,{
          "method":"GET"
        })
        let response=await data.json()
        console.log(response.products)
        setProducts(response.products)
       } catch (error) {
        throw new Error("admin Get Products Error")
      }
     
    }

    getProducts()

  },[])
  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Products</h1>
        <div className={styles.searchContainer}>
          <div className={styles.top}>

         
          <h1 className={styles.searchHeading}>Search A Product</h1>
          <Link href="/admin/products/addProduct" className={styles.addProductBtn}>
            <Category/>
            AddProduct
            </Link>
            </div>
          <div className={styles.bottom}>
            <input className={styles.searchText} type="text" name="" placeholder='Search any Product By Title' id="" />
          <Search className={styles.searchIcon}/>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr  >
                <th >ID</th>
                <th >Title</th>
                <th >Price</th>
                <th >Variants</th>
                <th >Category</th>
                <th >SubCategory</th>
                <th >Images</th>
                <th >Actions</th>
                
              </tr>
            </thead>
            <tbody>

              {products? products.map((item:any,i)=>(
                   <tr className={styles.tr} key={i}>
                  <td> <Link href={`/admin/products/${item._id}`} >{item._id.slice(0,6)}</Link></td>
                   <td >{item.title.slice(0,15)}</td>
                   <td >{item.price}</td>
                   <td >hey</td>
                   <td >{item.category}</td>
                   <td >{item.subCategory}</td>
                    
                   <td>
                     <Delete className={styles.actionDelete}/>
                     <Visibility className={styles.actionView}/>
                     <Edit className={styles.actionEdit}/>
                   </td>
                   <td>
                   <Delete className={styles.actionDelete}/>
                     <Visibility className={styles.actionView}/>
                     <Edit className={styles.actionEdit}/>
                   </td>
                 </tr>

              )):<div>Add Some Products</div>}
           
              
            </tbody>
          </table>
        </div>
      </div>
      
      
    </div>
  )
}
