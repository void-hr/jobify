const jwt = require("jsonwebtoken");

const verifyJwt = (req,res,next) => {
    try {
        const token = req.header('authorization');

    } catch (error) {
        return res.status(409).json({message: "Authentication failed"})
    }

    next()
}

module.exports = verifyJwt