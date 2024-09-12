import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'; 


//for signup page
export const signup = async (req,res,next)=>{
    const {username, email, password}= req.body;
    //bcryptjs is used to hide the password in the database
    const hashedpassword = bcryptjs.hashSync(password,10);


    //here User means model we have already created
    const newUser = new User({ username, email, password: hashedpassword});
    try{
        await newUser.save()
        res.status(201).json("User created successfully");
    }
    catch(error){
        //next is the middleware to handle error
        next(error);
    };
};


//for signin page
export const signin = async (req,res,next) =>{
    const {email,password} = req.body;
    try{
         const validUser = await User.findOne({email});
         if(!validUser)
         {
            return next(errorHandler(404, 'User not found!'));
         }

         const validPassword = bcryptjs.compareSync(password,validUser.password);
         if(!validPassword)
         {
            return next(errorHandler(401,'Invalid Password'));
         }
         //we use id to check because each user has unique
         const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
         //rest and ._doc means all the things expect the password
         const {password:pass, ...rest} = validUser._doc;
         res
         .cookie('access_token', token, { httpOnly:true })
         .status(200)
         .json(rest)

    }catch(error){
        //next is the middleware to handle error
        next(error);
    }
}
