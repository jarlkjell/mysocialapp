const express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


dotenv.config();

const app = express()
const PORT = 3001;

const MONGO_URI = process.env.MONGO_URI;
const JWT_KEY = process.env.EXPRESS_APP_JWT_KEY;

app.use(express.json());

app.use(async (req,res,next)=> {
    await mongoose.connect(MONGO_URI);
    
    next();
})

const userSchema = new mongoose.Schema({
    id: String,
    email:{
        type: String,
        required: [true, "Please provide an Email!"],
        unique: true,
    },
    name: String,
    password: {
        type: String,
        required: [true, "Please provide a password!"],
    },
    year: Date,
    category: String
})
const User  = mongoose.model('User',userSchema);


//Routen
app.get('/',(req,res) => {
    res.send("This is the home route");
})

app.get('/health-check',(req,res ) => {
    res.status(200).send("I perfectly work fine on Status 200");
})

app.post('/register', async (req,res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = await User.create({
            id: req.body.id,
            email: req.body.email,
            password: encryptedPassword,
            year: req.body.year,
            category: req.body.category
        })
        newUser.save();
        res.status(200).send("User successfully saved");
        // try {
        //     newUser.save();
        //     res.status(200).send("User successfully saved");
        // } catch (e) {
        //     res.status(500).send("Failed to save User");
        // }
    } catch (e) {
        res.status(400).send("User already exists");
    }
})

//findUser with jwt
app.post('/login', async (req,res) => {
    try {
        const userExist = await User.findOne({
            email:req.body.email,
        });
            
        if (!userExist) {
                res.status(400).send("Error User not found!");
                return 0;
            
        } else {
            const passwordValid = await bcrypt.compare(
            	req.body.password, userExist.password
            )
               
            if(passwordValid) {
                const userToken = jwt.sign({
                    id: userExist.id,
                    email: userExist.email,
                    name: userExist.name,
                    year: userExist.year,
                    category: userExist.category
                    }, JWT_KEY, {expiresIn: "7d"})
                res.status(200).send({status: "200/OK", access: userToken})
            } else {
                res.status(401).send("Access Denied!");
                return 0;
            }
        }
    } catch(e) {
        res.status(500).send("Server Error!")
    }

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})