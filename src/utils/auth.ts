import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import connectToDb from "./db"



const loginUser=async(data:any)=>{
    try {
        let user=await User.findOne({email:data.email})
        if(!user){
            throw new Error("Login Using Correct Credentials")
        }
        let passwordCompare=await bcrypt.compare(data.password,user.password)

        if(!passwordCompare){
            throw new Error("Login Using Correct Credentials")

        }
        return user;
        
    } catch (error) {
        throw new Error("Login Error")
        
    }

}
export const {handlers,auth,signIn,signOut}=NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialProvider({
            async authorize(credentials){
                let res=await loginUser(credentials)
                return res;

            }

        })
    ],
    callbacks:{
        async signIn({ profile,account}){
            if(account?.provider === "google"){
                await connectToDb()
                let user=await User.findOne({email:profile?.email})
                if(!user){
                 await User.create({
                     name:profile?.name,
                     email:profile?.email
     
                 })
                }
                
            }
            return true;
          
        }
    }
     
    
})