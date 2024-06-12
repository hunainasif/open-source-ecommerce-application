"use client"
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import jwt, { jwtDecode } from "jwt-decode"
import { useRouter } from 'next/navigation'
 

export const AuthContext=createContext()




export const AuthContextProvider=({children})=>{

    const router=useRouter()

    let [user,setUser]=useState(null)
    console.log(user)

    useLayoutEffect(()=>{
       setUser(localStorage.getItem("user"))

    },[])


    // login Function

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

            // after Login Process Decode the JWT token to get User information

            try {
                let decodedToken=jwtDecode(res.token)
                setUser(decodedToken.user)
                console.log(decodedToken)

                // after decode the token save the user in localStorage
                localStorage.setItem("user",JSON.stringify(decodedToken.user))
                // redirection based on user's Roles
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