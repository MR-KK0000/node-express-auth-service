const responseFuncError = (err) =>{
    return {
        data: null,
        error: err.message
    }
}

const responseFuncSuccess = (data) =>{
    return {
        data: data
    }
}

module.exports = {
    responseFuncError
}