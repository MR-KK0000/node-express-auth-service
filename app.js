require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT
const router = require('./routes/routes')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Your API Documentation',
        version: '1.0.0',
        description: 'API documentation using Swagger',
      },
    },
    apis: ['./routes/*.js'], // Path to the API routes files
  };

const specs = swaggerJsDoc(options);

app.use(morgan('dev'));

app.use(express.json());

app.use(cors());

app.use('/', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));


module.exports = app