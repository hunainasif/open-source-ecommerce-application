import Order from "@/models/Order";
import connectToDb from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
 


// get SingleOrder
export const GET=async(request:NextRequest,response:NextResponse)=>{
    try {
        
        await connectToDb()

        let id=request.url.split("orders/")[1]

        let order=await Order.findById(id)
        return NextResponse.json({order},{status:200})
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}


// deleteSingleOrder


export const DELETE=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()

        let id=request.url.split("orders/")[1]

        let order=await Order.findByIdAndDelete(id)

        return NextResponse.json({order},{status:200})
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}