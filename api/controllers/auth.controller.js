import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next)=>{
    const {username, email, password}= req.body;
    //bcryptjs is used to hide the password in the database
    const hashedpassword = bcryptjs.hashSync(password,10);


    //here User means model we have already created
    const newUser = new User({ username, email, password: hashedpassword});
    try{
        await newUser.save()
        res.status(201).json("hiiiiiiiii");
    }
    catch(error){
        next(error);
    };
    
};