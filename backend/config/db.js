import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://madhawaawishka:33858627@cluster0.pqefzek.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}