const express = require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

const app = express()
const PORT = 3001;

const MONGO_URI = process.env.MONGO_URI;

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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})