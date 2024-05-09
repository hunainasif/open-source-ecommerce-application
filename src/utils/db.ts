import mongoose from "mongoose"




const connectToDb=async()=>{
    try {
        let dataBaseUrl:any=process.env.MONGO_URL
        await mongoose.connect(dataBaseUrl)
        console.log("DataBase Connected")
        
    } catch (error) {
        throw new Error("DataBase Error")
        
    }

}

export default connectToDb;