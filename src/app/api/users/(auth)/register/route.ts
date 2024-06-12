import User from "@/models/User"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import connectToDb from "@/utils/db"




export const POST=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()

        let reqBody=await request.json()

        let {name,email,password}=await reqBody

        if(!name || !email || !password){
            return NextResponse.json("Incomplete credentials",{status:401})
        }

        let user=await User.findOne({email})

        if(user){
            return NextResponse.json("User with This email Already Exits ",{status:400})
        }

        let salt=await bcrypt.genSalt(10)
        let hash=await bcrypt.hash(password,salt)

        user=await User.create({
            name,
            email,
            password:hash
        })

        let data={
            user:{
                id:user.id,
                isAdmin:user.isAdmin
            }
        }

        let sec:any=process.env.JWT_SEC

        let token=jwt.sign(data,sec)

        return NextResponse.json({token,success:true},{status:200})

        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}