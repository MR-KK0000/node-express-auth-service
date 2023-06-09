const auth = require('../service/auth.service')


const controller = {}

controller.token = async (req, res) =>{
    try {
        const token = await auth.initialToken()
        res.status(200).json(token)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

controller.register = async (req, res) =>{
    try {
        const register = await auth.registerAuth(req.body)
        res.status(200).json(register)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = controller

