import React from 'react'
import styles from ".//products.module.css"
import { Category, Delete, Edit, Search, Visibility } from '@mui/icons-material'
import Link from 'next/link'
export default function Products() {
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
              <tr className={styles.tr}>
                <td >090078601</td>
                <td >Timeberland Ankle Classic Boots</td>
                <td >129</td>
                <td >small,medium,large</td>
                <td >Men</td>
                <td >Shirts</td>
                 
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
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
              <tr>
                <td>090078601</td>
                <td>Timeberland Ankle Classic Boots</td>
                <td>129</td>
                <td>small,medium,large</td>
                <td>Men</td>
                <td>Shirts</td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
                <td>
                  <Delete/>
                  <Visibility/>
                  <Edit/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      
    </div>
  )
}
