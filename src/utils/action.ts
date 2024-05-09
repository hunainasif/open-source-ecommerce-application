"use server"
import { signIn, signOut } from "./auth"



export const LoginWithGoogle=async()=>{
    
         
        await signIn("google")
   
}
export const LogOut=async()=>{
     
        
        await signOut()
        console.log("SignOut")
        
    
}