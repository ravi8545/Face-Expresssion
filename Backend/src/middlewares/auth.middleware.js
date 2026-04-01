const blacklistModel = require("../models/blacklist.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache")

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided"
        })
    }
    // const isTokenBlacklisted = await blacklistModel.findOne({
    //     token
    // })
    // if (isTokenBlacklisted) {
    //     return res.status(401).json({
    //         message: "Token Invalid ok"
    //     })
    // }
    const isTokenBlacklisted = await redis.get(token);
  
    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"Invalid token (redis)",
            //for understanding purpose 
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}

module.exports = { authUser };








