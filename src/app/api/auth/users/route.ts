import User from "@/models/User";
import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";






export const GET=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()

        let users=await User.find()

        return NextResponse.json({users},{status:200})

        
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }

}

// getSingleUser