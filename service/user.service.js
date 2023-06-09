const { responseFuncError }  = require('../utils/core/response.util')
const { storeData, fetchData } = require('../utils/core/apiCall.util')

const createUser = async (data) =>{
    try {
        const url = `${process.env.USER_SERVICE_URL}/create`
        const body = {
            username: data.username,
            password: data.password
        }
        const result = await storeData(url, body)
        return result
    } catch (error) {
        return responseFuncError(error)
    }
}

const existsUser = async (username) =>{
    try {
        const url = `${process.env.USER_SERVICE_URL}/exsits?username=${username}`
      
        const result = await fetchData(url)
        return result
    } catch (error) {
        return responseFuncError(error)
    }
}


module.exports = {
    createUser,
    existsUser
}