import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken"
import bycrypt from 'bcryptjs'
import validator from "validator"


//login user
const loginUser= async (req,res) =>{
    const {email,password}=req.body;
        try {
            const user = await userModel.findOne({email});

            if (!user) {
                return res.json({success:false,message:"User Doesn't exisits"})              
            }

            const isMatch=await bycrypt.compare(password,user.password);

            if (!isMatch) {
                return res.json({success:false,message:"Invaid credentails"})
            }

            const token = createToken(user._id);
            res.json({success:true,token})

        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
    
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET )
}


//register user
const registerUser=async (req,res) => {
    const {name,password,email}=req.body;   
    try {
        //checking is user already exisits
        const exists=await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists"})       
        }


        //validating email format and string password

        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please Enter valid email"})            
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please Enter Strong password"})            
        }

        //hashing user password
        const salt =await bycrypt.genSalt(10)
        const hashedPassword=await bycrypt.hash(password,salt);

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        
        const user = await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}