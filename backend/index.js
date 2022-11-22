const express = require('express');
const { mongo, default: mongoose } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express()
const PORT = 3001;

const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

app.use(async(req,res,next)=> {
    await mongoose.connect(MONGO_URI);

    next();
})

const userSchema = new mongoose.Schema({
    id: String,
    email:{
        type: String,
        unique: true
    },
    name: String,
    password: String,
    born: Date
})
const User  = mongoose.model('User',userSchema);


//Routen
app.get('/',(req,res) => {
    res.send("This is the home route");
})

app.get('/health-check',(req,res ) => {
    res.status(200).send("I perfectly work fine on Status 200");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})