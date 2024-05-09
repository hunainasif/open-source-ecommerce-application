import User from "@/models/User";
import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const POST=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()

        let reqBody=await request.json()

        let {name,email,password}=reqBody

        if(!name || !email || !password){
            return NextResponse.json("Missing Elements",{status:401})
        }

        let user=await User.findOne({email})
        if(user){
            return NextResponse.json("User with this email already exists",{status:409})
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
                id:user.id
            }
        }

        let secret:any=process.env.JWT_SEC
        let token=jwt.sign(data,secret)

        return NextResponse.json({token},{status:200})

        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}