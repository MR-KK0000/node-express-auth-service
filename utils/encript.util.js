const bcrypt = require('bcrypt');
const saltRounds = 10;
const { responseFuncError } = require('./core/response.util')

const hashText = async (data) =>{
    try {
        const salt = await bcrypt.genSalt(saltRounds);

        const hash = await bcrypt.hash(data, salt)
        return hash
    } catch (error) {
        return responseFuncError(error)
    }
} 

const compareText = async (data, hashedData) =>{
    try {
        const match = await bcrypt.compare(data, hashedData)
        return match
    } catch (error) {
        return responseFuncError(error)
    }
} 

module.exports = {
    hashText,
    compareText
}