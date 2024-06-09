import Product from "@/models/Product";
import connectToDb from "@/utils/db";
import { writeFile } from "fs/promises";
 import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { URL } from "url";




// add Product
export const POST=async(request:NextRequest,response:NextResponse)=>{
    try {

        // -->DataBase Connected
        await connectToDb()

        // -->get the Data from the Form which has sent by API
        const formData=await request.formData()
        
        let images=await formData.getAll("images")

        if(!images){
            return NextResponse.json("No Images Received",{status:400})
        }
    //  -->Image Upload section
        try {
            await Promise.all(images.map(async (item:any) => {
              if (item instanceof File) {
                const arrayBuffer = await item.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const fileName = item.name.replaceAll(" ", "-");
              await writeFile(
                  path.join(process.cwd(), "public/uploads/", fileName),
                  buffer
                );

                 
              } else {
                throw new Error("Invalid file type received.");
              }
            }));
        
           } catch (error) {
            return NextResponse.json("Images Upload Failed")
            
         }
        //  -->Get the Filepath To store in the Product Model or DataBase
         const filePaths = images.filter((item) => item instanceof File).map((item:any) => {
             
            const fileName = item.name;
          
            return fileName;
          });
        let sizes=formData.getAll("sizes")
      
        const title = formData.get("title");
        const description = formData.get("description");
        const price = formData.get("price");
        const category = formData.get("category");
        const subCategory = formData.get("subCategory");

        // create && store The Product
         let  newProduct=new Product({
            title,
            description,
            price,
            category,
            subCategory,
            sizes,
            images:filePaths  
        })
        await newProduct.save()

        return NextResponse.json({newProduct},{status:200})
        
    } catch (error) {
        return NextResponse.json({error},{status:500})
        
    }
}


// get Products


export const GET=async(request:NextRequest,response:NextResponse)=>{
  try {
    await connectToDb()

    // Make Url Vairable to get Category & subCategory from Search Params
    let url=new URL(request.url)
    const searchParams=new URLSearchParams(url.searchParams)
    // console.log(searchParams.get("category"))
    // console.log(searchParams.get("subCategory"))

    let category=searchParams.get("category")
    let subCategory=searchParams.get("subCategory")

    // getProduct By Category
    if(category && !subCategory){
      let categoryProduct=await Product.aggregate([
        {$match:{category}}
      ])
      return NextResponse.json({categoryProduct},{status:200})
    }
  // getProduct By category && subCategory
    if(category && subCategory){
      let subCategoryProduct=await Product.aggregate([
        {$match:{$and:[{category,subCategory}]}}
      ])
     
      console.log(subCategoryProduct)
      console.log("Api Hit")

      return NextResponse.json({subCategoryProduct},{status:200})
    }
  
  
    let products=await Product.find()
    return NextResponse.json({products},{status:200})
    
  } catch (error) {
    return NextResponse.json({error},{status:500})
    
  }

}

