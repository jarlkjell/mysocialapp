const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


dotenv.config();
const JWT_KEY = process.env.EXPRESS_APP_JWT_KEY;

module.exports = async(req,res,next) => {
    try {
        //How to get the token in the request header(which position)
        const token = await req.headers.authorization.split(" ")[1];

        const decodedToken = await jwt.verify(token,JWT_KEY);

        const user = await decodedToken;
        req.user = user;
        next();
    } catch(error) {
        res.status(401).send("Invalid Request!");
    }
}
