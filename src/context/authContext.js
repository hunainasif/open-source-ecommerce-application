"use client"
import { createContext, useEffect, useState } from "react";
import jwt, { jwtDecode } from "jwt-decode"
import { useRouter } from 'next/navigation'
 



export const AuthContext=createContext()




export const AuthContextProvider=({children})=>{

    const router=useRouter()

    let [user,setUser]=useState(null)
    console.log(user)

    useEffect(()=>{
        let storedUser=localStorage.getItem("user")

        if(storedUser){
            setUser(storedUser)
        }

    },[user])

    const login=async(credentials)=>{
        console.log(credentials.email,credentials.password)
        try {
            let data=await fetch(`/api/users/login`,{
                method:"POST",
                headers:{
                    "Content-type":"applicaton/json"
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
            })

            let res=await data.json()

            console.log(res)

            try {
                let decodedToken=jwtDecode(res.token)
                console.log(decodedToken)
                localStorage.setItem("user",JSON.stringify(decodedToken.user))
                setUser(localStorage.getItem("user"))
                if(res.success && decodedToken.user.isAdmin){
                    router.push("/admin/products")
                    
                }
                else if(res.success && !decodedToken.user.isAdmin){
                    router.push("/cart")

                }
                
            } catch (error) {
                throw new Error("Decoded Error")
            }
        
            
        } catch (error) {
            throw new Error("Login Error in the Context API")
            
        }

     }
    return <AuthContext.Provider value={{user,login,setUser}}>
        {children}
    </AuthContext.Provider>
}