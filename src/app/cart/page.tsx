import React from 'react'
import styles from  "./cart.module.css"
import { Delete, Favorite, Note, Shop } from '@mui/icons-material'
import Link from 'next/link'
export default function Cart() {
  return (
    <div className={styles.cart}>
        <h1 className={styles.heading}>Shopping Cart <Shop/></h1>
       <div className={styles.container}>
        <div className={styles.left}>
          {/* singleItem Start */}
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemLeft}>
              <img className={styles.imgItem} src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.itemCenter}>
              
            <div className={styles.itemCenterLeft}>
              <div className={styles.itemValues}>

              <span className={styles.itemTitle}>Hey I am The Product</span>
              <span className={styles.itemPrice}>$12</span>
              <span className={styles.itemSize}>Medium</span>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.favourite}>
                  <Favorite/>
                  <span className={styles.favouriteButton}>  Favourite</span>
                </div>
                <div className={styles.delete}>
                  <Delete/>
                  <span className={styles.deleteButton}>Delete</span>
                </div>
              </div>


            </div>
            <div className={styles.itemCenterRight}>
              <div className={styles.quantity}>
                <button className={styles.quantityButton}>-</button>
                <span className={styles.itemQuantity}>1</span>
                <button className={styles.quantityButton}>+</button>
              </div>
            </div>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.itemTotal}>Total </span>
              <span className={styles.itemTotalPrice}>$123.00</span>
            </div>
          </div>
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
              <span>$1200.00</span>
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
              <span>$123.090</span>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <Link href="/checkout" className={styles.checkOutButton}>Proceed To Checkout</Link>
          </div>
        </div>
        </div>
       </div>
    </div>
  )
}
