import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import mongoose from 'mongoose';
import { UserRouter } from './routs/user.js';



const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', UserRouter)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')

app.listen(process.env.PORT,() => {
console.log("Server is Running")
})

