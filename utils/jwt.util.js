const jwt = require('jsonwebtoken')

const signToken = async(payload, key, isExpire, expireTime) =>{
    try {
        let option = {}
        if (isExpire){
            option = { expiresIn: expireTime}
        }

        const token = await jwt.sign(payload, key, option)
        return token
    } catch (error) {
        console.log(error)
        return ""
    }
}

module.exports = {
    signToken
}