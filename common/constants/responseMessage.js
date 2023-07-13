const responseMessage = [
    {
        code: 200,
        message: "Success"
    },
    {
        code: 201,
        message: "Created Success"
    },
    {
        code: 400,
        message: "Bad Request"
    },
    {
        code: 401,
        message: "Unauthorized"
    },
    {
        code: 403,
        message: "Forbidden"
    },
    {
        code: 404,
        message: "Not Found"
    },
    {
        code: 500,
        message: "Internal Server Error"
    }
]

module.exports = {
    responseMessage
}