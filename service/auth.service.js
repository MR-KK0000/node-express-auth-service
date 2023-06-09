const jwt = require('../utils/jwt.util')
const { responseFuncError }  = require('../utils/core/response.util')
const { hashText } = require('../utils/encript.util')
const userService = require('./user.service')


const initialToken = async () =>{
    try {
        const accessToken = await createAccesToken({ user: "test"})
        const refreshToken = await createRefreshToken({ user: "test"})

        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    } catch (error) {
        return responseFuncError(error)
    }
}

const createRefreshToken = async (payload) =>{
    try {
        const key = "refesh-token"
        const token = await jwt.signToken(payload, key, true, '1d')
        return token
    } catch (error) {
        console.log(error)
        return responseFuncError(error)
    }
}

const createAccesToken = async (payload) =>{
    try {
        const key = "access-token"
        const token = await jwt.signToken(payload, key, true, '8h')
        return token
    } catch (error) {
        console.log(error)
        return responseFuncError(error)
    }
}



const registerAuth = async (data) =>{
    try {
        const { username, password} = data

        const IsExsitsUser = await userService.existsUser(username)
        if (IsExsitsUser) {
            throw new Error("Duplicate Username")
        }
        const hashPassword = await hashText(password)
        const user = {
            username: username,
            password: hashPassword
        }
        const result = await userService.createUser(user)
        return result
    } catch (error) {
        return responseFuncError(error) 
    }
}

module.exports = {
    createAccesToken,
    createRefreshToken,
    initialToken,
    registerAuth
}