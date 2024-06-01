import Order from "@/models/Order";
import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";




export const POST=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()
        let reqBody=await request.json()
        console.log(reqBody)

        let order=new Order(reqBody)

        await order.save()

        return NextResponse.json({order},{status:200})
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
        
    }
}


export const GET=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()
        let order=await Order.find()

        return NextResponse.json({order},{status:200})
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}