import User from "@/models/User";
import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const POST=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()

        let reqBody=await request.json()

        let {email,password}=await reqBody;

        let user=await User.findOne({email})

        if(!user){
            return NextResponse.json("Invalid Credentials",{status:401})
        }
        let passwordCompare=await bcrypt.compare(password,user.password)

        if(!passwordCompare){
            return NextResponse.json("Invalid Credentials",{status:400})
        }
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