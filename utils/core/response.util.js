const dayjs = require('dayjs')
const responseConst = require('../../common/constants/responseMessage')

const responseFuncError = (err) =>{
    return {
        success: false,
        data: null,
        message: err.message,
        error: err
    }
}

const responseFuncSuccess = (data) =>{
    return {
        success: true,
        data: data,
        message: 'success',
        error: null
    }
}

const responseForm = (meta,data) =>{
    return {
        meta: meta,
        data: data
    }
}

const successResponse = (res, statusCode ,data) =>{
    const meta = generateMeta(statusCode, {})
    res.status(statusCode).json({
        meta: meta,
        data: data.data
    })
}

const errorResponse = (res, statusCode, error) =>{
    const meta = generateMeta(statusCode, error)
    res.status(statusCode).json({
        meta: meta
    })
}

const generateMeta = (statusCode, error) =>{
    const responseMessage = responseConst.responseMessage.find((f) => f.code === statusCode)
    return {
        statusCode: statusCode,
        message: responseMessage? responseMessage.message: "",
        error: error,
        timestemp: dayjs()
    }
}

module.exports = {
    responseFuncError,
    responseForm,
    responseFuncSuccess,
    errorResponse,
    successResponse
}