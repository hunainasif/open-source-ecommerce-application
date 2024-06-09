import Product from "@/models/Product";
import connectToDb from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

interface Params {
    id?: string;
}



// GetSingle Product
export const GET = async (request: NextRequest, context: { params: Params }) => {
    try {
        const { params } = context;
        const id = params?.id;

        console.log(id);

        let product=await Product.findById(id)


        return NextResponse.json({ product }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json("Internal Server Error", { status: 500 });
    }
};


// updateSingleProduct


export const PUT=async(request:NextRequest,response:NextResponse)=>{
    try {
        await connectToDb()
        const id = request.url.split('products/')[1];

        let reqBody=await request.json()
    let updatedProduct=await Product.findByIdAndUpdate(id,{$set:reqBody},{new:true})

    return NextResponse.json({updatedProduct},{status:200})

        
        return NextResponse.json("DOne",{status:200})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
        
    }
}



// deleteProduct


export const DELETE=async(request:NextRequest,response:NextResponse)=>{
    try {

        await connectToDb()
        let id=request.url.split("products/")[1]

        let deletedProduct=await Product.findByIdAndDelete(id)

        return NextResponse.json({deletedProduct},{status:200})

        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}