"use client"


import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useLayoutEffect } from 'react'

export default function AdminAuth({children}:any) {
    let {user}=useContext(AuthContext)
    let router=useRouter()

    useLayoutEffect(() => {
         if(user && user.isAdmin){
            router.push("/admin/products")
         }
         else if(user && !user.isAdmin){
            router.push("/cart")
         }
        
       
    }, [user,router]);
  return (
    <div>
      {children}
    </div>
  )
}
