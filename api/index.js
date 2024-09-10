import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected');
})
.catch( (err) => {
    console.log(err);
});


const app = express();

//allows to use json on the server
app.use(express.json());


app.listen(5000,()=>{
    console.log('Server is running on port 5000!!!');
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);