import { AddShoppingCart,  CheckOutlined,  CurrencyPound,  FavoriteBorder } from '@mui/icons-material'
import React from 'react'
import styles from "./subCategory.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function SubCategory({params}:{params:{category:string,subCategory:string}}) {
//   {params.category}
// {params.subCategory}
  return (
    <div  className={styles.subCategory}>
       <div className={styles.headings}>
        <h1 className={styles.heading}>{params.category.toUpperCase()}</h1>
        <h1 className={styles.heading}>{params.subCategory.toUpperCase()}</h1>
       </div>

      <div className={styles.container}>

        {/* item Replicate */}
        
        <Link href={`/${params.category}/${params.subCategory}/123`} className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </Link>
        
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        <div className={styles.item}>

          <div className={styles.top}>

            <img src="/img/slider1.jpg" alt=""  className={styles.img}/>
            </div>          
          <div className={styles.bottom}>
            
            <div className={styles.left}>
              <AddShoppingCart className={styles.icon}/>
            </div>
            <div className={styles.center}>
               <div className={styles.title}>TimerLand Ankle Classic Boots</div>
               
               <div className={styles.price}>
                <CurrencyPound className={styles.moneyIcon}/>
                <span className={styles.money}>290</span>
                <span>.00</span>
                 
               </div>
            </div>
            <div className={styles.right}>
              <FavoriteBorder className={styles.icon}/>
            </div>
          </div>
       
        </div>
        {/* till */}
      </div>
    </div>
  )
}
