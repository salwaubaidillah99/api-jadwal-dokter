const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Setup Swagger options
const options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'API Documentation', // Title of your API
      version: '1.0.0',
      description: 'API documentation for my Node.js project',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Define JWT format
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Applying bearerAuth to all routes by default
      },
    ],
  },
  servers: [
    {
      url: 'http://localhost:3000/api', // URL base server
    },
  ],
};

// Path to the API docs (adjust this path to match your file structure)
const swaggerSpec = swaggerJSDoc({
  ...options,
  apis: ['./src/swagger/module/*.js'], // Update path to the API routes
});

module.exports = { swaggerUi, swaggerSpec };
