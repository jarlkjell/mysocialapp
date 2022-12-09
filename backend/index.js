const express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const auth = require('./auth');
const cors = require('cors')



dotenv.config();

const app = express()
const PORT = 3001;

const MONGO_URI = process.env.MONGO_URI;
const JWT_KEY = process.env.EXPRESS_APP_JWT_KEY;

app.use(cors())
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
    year: String,
    category: String
})
const User  = mongoose.model('User',userSchema);


//Routen
app.get('/', auth ,(req,res) => {
    res.send("This is the home route");

})

app.get('/health-check',(req,res) => {
    res.status(200).send("I perfectly work fine on Status 200");
})

app.post('/registerApi', async (req,res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = await User.create({
            id: uuidv4(),
            email: req.body.email,
            name: req.body.name,
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
app.post('/loginApi', async (req,res) => {
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