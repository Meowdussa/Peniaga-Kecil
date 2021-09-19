const {sign, verify} = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const createTokens = (user) => {
    const accessToken = sign({username: user.username, id: user.id}, SECRET);
    return accessToken;
}

module.exports = {createTokens}