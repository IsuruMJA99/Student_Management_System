import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import nodemailer from 'nodemailer'

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPassword,
        });

        await newUser.save();
        return res.json({ status: true, message: "Record registered" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.json({ message: "Password is incorrect" });
        }

        const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
        return res.json({ status: true, message: "Login successful" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.json({ message: "User not registered" });
        } 

        const token = jwt.sign({id: user._id},process.env.KEY, { expiresIn: '5m' }); 

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ishusanka99@gmail.com',
              pass: 'aked phui skvk toik'
            }
          });
          
          var mailOptions = {
            from: 'ishusanka99@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:5173/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return res.json({ message:"error sending email" });
            } else {
                return res.json({ status: true, message:"email sent" });
            }
          });

    } catch(err){
                console.log(err)
        }
    })

    router.post('/reset-password/:token', async (req, res) => {
        const {token} = req.params;
        const { password } = req.body;
        try {
            const decode = await jwt.verify(token ,process.env.KEY );
            const id = decode.id;
            const hashPassword = await bcrypt.hash(password, 10)
            await User.findByIdAndUpdate({_id: id}, {password: hashPassword})
            return res.json({status : true, message: "updated password"})
        } catch(err){
            return res.json("invalid token")
            } 
        })

export { router as UserRouter };
