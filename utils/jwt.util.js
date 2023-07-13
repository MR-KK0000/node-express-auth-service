const jwt = require('jsonwebtoken')
const { responseFuncSuccess ,responseFuncError }  = require('./core/response.util')

const signToken = async(payload, key, isExpire, expireTime) =>{
    try {
        let option = {}
        if (isExpire){
            option = { expiresIn: expireTime}
        }

        const token = await jwt.sign(payload, key, option)
        return responseFuncSuccess(token)
    } catch (error) {
        return responseFuncError(error)
    }
}

module.exports = {
    signToken
}