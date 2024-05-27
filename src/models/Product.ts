import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    sizes: {
        type: [String],
    },
    images: {
        type: [String],
        required: true
    }
}, { timestamps: true });

 const Product=mongoose.models.products || mongoose.model("products", ProductSchema);

 export default Product
