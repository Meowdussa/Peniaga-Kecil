const {sign, verify} = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET; //Hanis, you need to add JWT_SECRET="whatevercode" in your .env under DB_HOST,DB_USER,DB_NAME,DB_PASS

const createTokens = (user) => {
    const accessToken = sign({username: user.username, id: user.id}, SECRET);
    return accessToken;
}

// middleware
const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]

    // if there's no accesstoken in cookie
    if(!accessToken) return res.status(400).send({error:"User not Authenticated!"});

    try {
        //to check if it's a valid token
        const validToken = verify(accessToken, SECRET)
        if (validToken) {
            req.authenticated = true;
            return next();
        }
    } catch (err) {
        return res.status(400).send({error: err})
    }
}
module.exports = {createTokens, validateToken}