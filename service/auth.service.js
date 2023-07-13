const jwt = require('../utils/jwt.util')
const { responseFuncSuccess ,responseFuncError }  = require('../utils/core/response.util')
const { hashText } = require('../utils/encript.util')
const userService = require('./user.service')


const initialToken = async () =>{
    try {
        const accessToken = await createAccesToken({ user: "test"})
        if(!accessToken.success){
            return accessToken
        }
        const refreshToken = await createRefreshToken({ user: "test"})
        if(!refreshToken.success){
            return refreshToken
        }
        
        return responseFuncSuccess({
            accessToken: accessToken.data,
            refreshToken: refreshToken.data
        })
    } catch (error) {
        return responseFuncError(error)
    }
}

const createRefreshToken = async (payload) =>{
    try {
        const key = "refesh-token"
        const token = await jwt.signToken(payload, key, true, '1d')
        if (!token.success) {
            throw new Error(token.error)
        }
        return responseFuncSuccess(token.data)
    } catch (error) {
        return responseFuncError(error)
    }
}

const createAccesToken = async (payload) =>{
    try {
        const key = "access-token"
        const token = await jwt.signToken(payload, key, true, '8h')
        if (!token.success) {
            throw new Error(token.error)
        }
        return responseFuncSuccess(token.data)
    } catch (error) {
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